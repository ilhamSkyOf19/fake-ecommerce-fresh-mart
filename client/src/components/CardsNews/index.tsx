import { type FC } from 'react'
import { LazyImage } from '../../utils/LazyLoadImg'


// icons 
import { FaCalendarAlt } from "react-icons/fa";
import { formatDate } from '../../utils/formatDate';
import { FaRegComments } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";



const CardsNews: FC = () => {

    return (
        <div className='w-[15rem] h-[24rem] flex flex-col justify-start items-start shadow-md bg-white rounded-md overflow-hidden'>
            {/* content img */}
            <div className='flex-1 bg-black w-full overflow-hidden group cursor-pointer'>
                <LazyImage src="/news/news-1.jpg" alt="news" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out' />
            </div>
            {/* content desc */}
            <Description />
        </div>
    )
}

// desc
const Description: FC = () => {


    // format date 
    const date: string = formatDate(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000));
    const desc: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum et odit, optio qui laudantium voluptatem totam quia doloribus facere delectus."
    const title: string = "virginia rollad oats with honey and white oats 500g"

    return (
        <div className='flex-1/4 w-full flex flex-col justify-start items-start p-3 px-3.5 gap-0.5'>
            {/* category */}
            <h4 className='capitalize text-primary-matcha text-to-small italic'>
                new organic
            </h4>
            <h3 className='capitalize text-md font-bold text-slate-800 mb-2'>
                {title.length > 20 ? `${title.substring(0, 40)}...` : title}
            </h3>
            <div className='flex flex-row justify-start items-start gap-0.5 mb-2.5'>
                <div className='flex flex-row justify-start items-center gap-1.5'>
                    <FaCalendarAlt className='text-primary-matcha text-to-small' />
                    <p className='text-[0.55rem] text-primary-matcha'>{date}</p>
                </div>
                <LuDot className='text-primary-matcha text-sm' />
                <div className='flex flex-row justify-start items-center gap-1.5'>
                    <FaRegComments className='text-primary-matcha text-sm' />
                    <p className='text-[0.55rem] text-primary-matcha'>
                        342
                    </p>
                    <p className='text-[0.6rem] text-primary-matcha'>
                        Comment
                    </p>
                </div>
            </div>
            {/* desc */}
            <p className='text-to-small text-slate-600 mb-2.5'>
                {
                    desc.length > 100 ? `${desc.substring(0, 200)}...` : desc
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
