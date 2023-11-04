import { cleanEnv, str, port, num } from "envalid";

export const validateEnv = (): void => {
  cleanEnv(process.env, {
    MONGO_URI: str(),
    DB_NAME: str(),
    JWT_ACCESS_SECRET: str(),
    JWT_REFRESH_SECRET: str(),
    JWT_COOKIE_SECRET: str(),
    JWT_COOKIE_EXPIRE: num(),
    HOST: str(),
    PORT: port({ default: 8080 }),
    API_VERSION_1: str(),
    NODE_ENV: str(),
    GEOCODER_PROVIDER: str(),
    GEOCODER_API_KEY: str(),
    FILE_UPLOAD_PATH: str(),
    MAX_FILE_UPLOAD: num(),
    SMTP_HOST: str(),
    SMTP_PORT: port({ default: 2525 }),
    SMTP_EMAIL: str(),
    SMTP_PASSWORD: str(),
    FROM_EMAIL: str(),
    FROM_NAME: str(),
  });
};