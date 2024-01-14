import { INewsDetail } from "./INewsDetail";

export interface INews {
    status: string;
    total_hits: number;
    articles: INewsDetail[];
}