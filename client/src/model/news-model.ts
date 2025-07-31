export type NewsResponse = {
    id: string;
    category: string;
    title: string;
    date: string;
    comments: number;
    img: string;
    description: string;
};


export const toNewsResponse = (news: NewsResponse): NewsResponse => {
    return {
        id: news.id,
        category: news.category,
        title: news.title,
        date: news.date,
        comments: news.comments,
        img: news.img,
        description: news.description
    }
}