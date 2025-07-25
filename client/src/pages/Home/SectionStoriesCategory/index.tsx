import { useState, type FC } from 'react'
import { motion } from 'framer-motion'

// swiper 
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'


// img 
import aplles from '../../../assets/img/foods/aplles.jpg'
import fruits from '../../../assets/img/foods/fruits.jpg'
import meats from '../../../assets/img/foods/meats.jpg'
import seafood from '../../../assets/img/foods/seafood.jpg'
import bread from '../../../assets/img/category/bread.jpg'
import cereal from '../../../assets/img/category/cereal.jpg'
import wine from '../../../assets/img/category/wine.jpg'
import nuts from '../../../assets/img/category/nuts.jpg'
import veges from '../../../assets/img/category/veges.jpg'
import { LazyImage } from '../../../utils/LazyLoadImg'


// icons 
import { PiCarrotLight } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiBread } from "react-icons/pi";
import { PiWine } from "react-icons/pi";
import { RiSeedlingLine } from "react-icons/ri";
import type { CategoryProps } from '../../../model/category'
import CategoryComponent from '../../../components/CategoryComponent'




const SectionStoriesCategory: FC = () => {

    // state indikator swiper 
    const [activeSwiper, setActiveSwiper] = useState(0);

    // images
    const images: string[] = [aplles, meats, seafood, fruits]


    // category 
    const category: CategoryProps[] = [
        {
            text1: 'fruits',
            text2: 'veges',
            type: 'fruits'
        },
        {
            text1: 'breakfast',
            text2: 'cereals',
            type: 'breakfast'
        },
        {
            text1: 'breads',
            text2: 'pastries',
            type: 'breads'
        },
        {
            text1: 'beer, wine',
            text2: 'spirits',
            type: 'wine'
        },
        {
            text1: 'seeds',
            text2: 'nuts',
            type: 'seeds'
        }
    ]


    return (
        <div className={`min-h-[100vh] w-full flex flex-col justify-start items-center py-12  gap-16`}>
            {/* category */}
            <div className='w-[75%] h-[4.5rem] flex flex-row justify-between items-center gap-4 '>
                {
                    category.map((item, index) => (
                        <Category key={index} text1={item.text1} text2={item.text2} type={item.type} />
                    ))
                }
            </div>

            {/* stories */}
            <Stories setActiveSwiper={setActiveSwiper} activeSwiper={activeSwiper} images={images} />

            {/* img category */}
            <ImgCategory />

        </div>
    )
}




// category 
const Category: FC<CategoryProps> = ({ text1, text2, type }) => {
    return (
        <div className='flex-1 h-full flex flex-row justify-start items-center bg-white rounded-md pl-5 gap-2.5'>
            {
                type === 'fruits' && <PiCarrotLight className='text-3xl text-primary-matcha' />

            }
            {
                type === 'breakfast' && <IoFastFoodOutline className='text-3xl text-orange-300' />
            }
            {
                type === 'breads' && <PiBread className='text-3xl text-amber-800' />
            }
            {
                type === 'wine' && <PiWine className='text-3xl text-pink-400' />
            }
            {
                type === 'seeds' && <RiSeedlingLine className='text-3xl text-primary-matcha' />
            }


            <div className='flex flex-col justify-start items-start'>
                <p className='capitalize text-xs font-semibold text-slate-700'>
                    {text1}
                </p>
                <p className='capitalize text-xs font-semibold text-slate-700'>
                    & {text2}
                </p>
            </div>
        </div>
    )
}



type StoriesProps = {
    setActiveSwiper: (value: number) => void;
    activeSwiper: number;
    images: string[]
}

// content stories
const Stories: FC<StoriesProps> = ({ setActiveSwiper, activeSwiper, images }) => {
    return (
        <div className={`w-[75%] h-[22rem] flex flex-row justify-center items-center mb-8`}>
            <div className='flex-1 flex flex-row justify-end items-center relative w-full h-full rounded-l-md'>
                <div className='w-[50%]  h-full bg-white'></div>
                <div className='w-full h-[80%] absolute top-0 rounded-lg overflow-hidden'>
                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        speed={2000}
                        loop={true}
                        onSlideChange={(swiper) => setActiveSwiper(swiper.realIndex)}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        allowTouchMove={false}
                        className=" w-full h-full"
                    >
                        {
                            images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className='w-full h-full flex flex-row justify-center items-center'>
                                        {
                                            activeSwiper === index ? (
                                                <motion.div
                                                    key={index}
                                                    initial={{ scale: 1, opacity: 0.9 }}
                                                    animate={{ scale: 1.4, opacity: 1 }}
                                                    transition={{ duration: 40, ease: 'easeOut' }}
                                                    className='w-full h-full flex flex-row justify-center items-center'
                                                >
                                                    <LazyImage src={img} alt="fruits" className="w-full h-full object-cover" />
                                                </motion.div>
                                            ) : (
                                                <LazyImage src={img} alt="fruits" className="w-full h-full object-cover" />
                                            )
                                        }
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

            {/* content right */}
            <ContentRight />
        </div>
    )
}


// content right 
const ContentRight: FC = () => {
    return (
        <div className='flex-1 bg-white w-full h-full rounded-r-md flex flex-row justify-start items-start pt-12 pl-4'>
            <div className=' flex-1 h-full relative flex justify-start items-start'>
                <p className=' absolute w-[8rem] text-to-small font-semibold text-primary-matcha -rotate-90 tracking-[0.3rem] z-2 -left-[2.7rem] top-12 uppercase'>
                    our stories
                </p>
            </div>
            <div className='flex-12 bg-white h-full relative flex flex-col justify-start items-start pl-2 gap-6'>
                <div className='w-full flex flex-col justsify-start items-start gap-1'>
                    <h3 className='capitalize font-bold text-4xl text-slate-800'>
                        we are
                    </h3>
                    <h3 className='capitalize font-bold text-4xl text-slate-800'>
                        health food
                    </h3>
                    <h3 className='capitalize font-bold text-4xl text-slate-800'>
                        organic
                    </h3>
                </div>
                <p className='w-[70%] text-to-small text-slate-600'>
                    We've recently update our entire product portofolio to give customers and partners the best products with the newest technology.
                </p>
                <p className='capitalize text-primary-matcha text-3xl font-Mrs-Saint-Delafield '>
                    efresh
                </p>
            </div>
        </div>
    )
}


// img category

const ImgCategory: FC = () => {
    return (
        <div className='w-full h-[98vh] grid grid-cols-1 grid-rows-2 gap-4 px-7'>
            <div className='row-span-1  grid grid-cols-2 grid-rows-1 gap-4'>
                <div className='col-span-1  rounded-md overflow-hidden relative group cursor-pointer'>
                    <div className="w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105">
                        <LazyImage src={veges} alt="veges" className="w-full h-full object-cover" />
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center'>
                        <CategoryComponent text1='fruits' text2='veges' type='fruits' />
                    </div>
                </div>
                <div className='col-span-1  rounded-md overflow-hidden relative group cursor-pointer'>
                    <div className="w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105">
                        <LazyImage src={cereal} alt="veges" className="w-full h-full object-cover" />
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center'>
                        <CategoryComponent text1='breakfast' text2='cereals' type='breakfast' />
                    </div>
                </div>
            </div>
            <div className='row-span-1 col-span-1 grid grid-cols-3 grid-rows-1 gap-4'>
                <div className='col-span-1 row-span-1 rounded-md overflow-hidden relative group cursor-pointer'>
                    <div className="w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105">
                        <LazyImage src={bread} alt="veges" className="w-full h-full object-cover" />
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center'>
                        <CategoryComponent text1='breads' text2='pastries' type='breads' />
                    </div>
                </div>
                <div className='col-span-1 row-span-1  rounded-md overflow-hidden relative group cursor-pointer'>
                    <div className="w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105">
                        <LazyImage src={wine} alt="veges" className="w-full h-full object-cover" />
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center'>
                        <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center'>
                            <CategoryComponent text1='beer, wine' text2='spirits' type='wine' />
                        </div>
                    </div>
                </div>
                <div className='col-span-1 row-span-1  rounded-md overflow-hidden relative group cursor-pointer'>
                    <div className="w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105">
                        <LazyImage src={nuts} alt="veges" className="w-full h-full object-cover" />
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center'>
                        <CategoryComponent text1='seeds' text2='nuts' type='seeds' />
                    </div>
                </div>
            </div>
        </div>
    )
}




export default SectionStoriesCategory
