import BaseController from "@/utils/base-controller.util";
import express, { Application } from "express";
import { connectMongoDB } from "./db/mongo.db";
import { errorResponseMiddleware } from "../middleware/error.middleware";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

export default class App {
  public express: Application;
  public port: number;

  constructor(controllers: BaseController[], port: number) {
    this.express = express();
    this.port = port;

    this.initDbConnection();
    this.initMiddleware();
    this.initControllers(controllers);
    this.initErrorHandler();
  }

  private initMiddleware(): void {
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(morgan("dev"));
    this.express.use(compression());
    this.express.use(cookieParser());
    this.express.use(express.json());
  }
  private initDbConnection(): void {
    connectMongoDB();
  }
  private initErrorHandler(): void {
    this.express.use(errorResponseMiddleware);
  }
  private initControllers(controllers: BaseController[]): void {
    controllers.map((controller) => {
      this.express.use(`/api/${process.env.API_VERSION_1}`, controller.router);
    });
  }

  public listen() {
    // console.log("PORT = ", this.port);
    this.express.listen(this.port, () => {
      console.log(`Server connected to ${process.env.HOST}:${this.port}`);
    });
  }
}
