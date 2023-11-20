import { Document } from "mongoose";
export default interface Movie extends Document {
    rank: number;
    title: string;
    description: string;
    image: string;
    big_image: string;
    genre: string[];
    thumbnail: string;
    rating: string;
    id: string;
    year: number;
    imdbid: string;
    imdb_link: string;
}
