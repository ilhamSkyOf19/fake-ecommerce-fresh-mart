import API from "../lib/api";
import { toNewsResponse, type NewsResponse } from "../model/news-model";

export class NewsService {
    // get 
    static async getAll(take: string, order: 'asc' | 'desc'): Promise<NewsResponse[] | null> {
        try {
            const response = await API.get(`/news?take=${take}&order=${order}`);
            return response.data.map(toNewsResponse)
        } catch (error) {
            console.error('Failed to fetch news:', error);
            return null;
        }
    }
}