import { type FC } from 'react'
import { LazyImage } from '../../utils/LazyLoadImg'


// icons 
import { FaCalendarAlt } from "react-icons/fa";
import { formatDate } from '../../utils/formatDate';
import { FaRegComments } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import type { NewsResponse } from '../../model/news-model';


type Props = {
    item: NewsResponse | null;
}
const CardsNews: FC<Props> = ({ item }) => {

    return (
        <div className='w-[15rem] h-[24rem] flex flex-col justify-start items-start shadow-md bg-white rounded-md overflow-hidden'>
            {/* content img */}
            <div className='flex-1 bg-black w-full overflow-hidden group cursor-pointer'>
                <LazyImage src={`/news/${item?.img}`} alt="news" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out' />
            </div>
            {/* content desc */}
            <Description category={item?.category} title={item?.title} date={item?.date} comments={item?.comments} description={item?.description} />
        </div>
    )
}


type DescriptionProps = {
    category?: string;
    title?: string;
    date?: string;
    comments?: number;
    description?: string;
}

// desc
const Description: FC<DescriptionProps> = ({ category, title, date, comments, description }) => {
    return (
        <div className='flex-1/4 w-full flex flex-col justify-start items-start p-3 px-3.5 gap-0.5'>
            {/* category */}
            <h4 className='capitalize text-primary-matcha text-to-small italic'>
                {category}
            </h4>
            <h3 className='capitalize text-md font-bold text-slate-800 mb-2'>
                {title && title?.length > 20 ? `${title?.substring(0, 40)}...` : title}
            </h3>
            <div className='flex flex-row justify-start items-start gap-0.5 mb-2.5'>
                <div className='flex flex-row justify-start items-center gap-1.5'>
                    <FaCalendarAlt className='text-primary-matcha text-to-small' />
                    <p className='text-[0.55rem] text-primary-matcha'>  {date ? formatDate(new Date(date)) : ''}</p>
                </div>
                <LuDot className='text-primary-matcha text-sm' />
                <div className='flex flex-row justify-start items-center gap-1.5'>
                    <FaRegComments className='text-primary-matcha text-sm' />
                    <p className='text-[0.55rem] text-primary-matcha'>
                        {comments}
                    </p>
                    <p className='text-[0.6rem] text-primary-matcha'>
                        Comment
                    </p>
                </div>
            </div>
            {/* desc */}
            <p className='text-to-small text-slate-600 mb-2.5'>
                {
                    description && description.length > 100 ? `${description.substring(0, 200)}...` : description
                }

            </p>

            {/* button */}
            <button className='uppercase py-2 px-4 border border-slate-400 rounded-full text-black font-semibold text-[0.55rem] hover:bg-primary-matcha hover:text-white transition-all duration-300 ease-in-out'>
                read more
            </button>
        </div>
    )
}

export default CardsNews
