import { useEffect, useState, type FC } from "react"
import CardsNews from "../../../components/CardsNews"
import ButtonMore from "../../../components/ButtonMore";
import type { NewsResponse } from "../../../model/news-model";
import { NewsService } from "../../../services/news.service";
import LoadingCardProduct from "../../../components/LoadingCardProduct";

const SectionNews: FC = () => {
    // state 
    const [news, setNews] = useState<NewsResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // fetch news data (mocked for now)
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            const response = await NewsService.getAll('4', 'desc');

            if (response) {
                setLoading(false);
                setNews(response);
            } else {
                console.error('Failed to fetch news');
            }
        }
        fetchNews();
    }, [])

    useEffect(() => {
        if (news) {
            console.log('Fetched news:', news);
        }
    }, [news]);


    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-start px-7 gap-10'>
            <div className="w-full h-[2.3rem] relative flex flex-row justify-start items-start pb-3 after:content-[''] after:w-full after:h-[1px] after:bg-slate-200 after:absolute after:bottom-0 after:left-0">
                <h2 className="text-lg font-bold text-primary-matcha uppercase">
                    news <span className="text-black">& blogs</span>
                </h2>
                {/* container card */}
            </div>
            <ContainerCards news={news} loading={loading} />
            <div className="w-full flex flex-col justify-center items-center">
                <ButtonMore link="/" />
            </div>
        </div>
    )
}


type ContainerCardsProps = {
    news: NewsResponse[];
    loading: boolean;
}
// container card
const ContainerCards: FC<ContainerCardsProps> = ({ news, loading }) => {
    console.log(loading, news);
    return (
        <div className="py-2 w-full flex flex-row justify-center items-start gap-12 flex-wrap">
            {/* cards */}
            {
                loading ? (
                    [0, 1, 2,].map((_, index) => (
                        <LoadingCardProduct key={index} />
                    ))
                ) : (
                    news?.length > 0 ? (
                        news?.map((item, index) => (
                            <CardsNews key={index} item={item} />
                        ))
                    ) : (
                        <p className="text-sm text-slate-500">No news found.</p>
                    )
                )
            }
        </div>
    )
}

export default SectionNews
