import type { FC } from 'react'
import { LazyImage } from '../../utils/LazyLoadImg'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// img 
import burger from '../../assets/img/thumb/burger.png'
import food from '../../assets/img/thumb/food.png'
import veges from '../../assets/img/thumb/veges.png'
import leaf1 from '../../assets/component/leaf-1.png'
import leaf2 from '../../assets/component/leaf-2.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


// text
import titleBurger2 from '../../assets/text/title-burger-2.png'
import kentangGoreng from '../../assets/component/ketang-goreng.png'




const SwiperThumb: FC = () => {
    return (
        <div className="flex flex-row justify-center items-center h-[85vh] w-full z-2 relative">


            {/* Custom Navigation Buttons */}
            <div className="px-4 flex flex-row justify-center items-center absolute bottom-8 left-[40%] gap-3">
                <button className={`swiper-button-prev-custom z-10 transform bg-transparent border-1 border-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer  hover:border-primary-matcha hover:bg-primary-matcha transition-all duration-300 ease-in-out`}>
                    <FaArrowLeft className="text-sm text-white" />
                </button>
                <button className={`swiper-button-next-custom z-10 transform  bg-transparent border-1 border-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:border-primary-matcha hover:bg-primary-matcha transition-all duration-300 ease-in-out`}>
                    <FaArrowRight className="text-sm text-white" />
                </button>
            </div>
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                loop={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                allowTouchMove={true}
                className="duration-1000  relative w-full h-full"
            >
                <SwiperSlide>
                    <ContentThumbnail img={"burger"} />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentThumbnail img={'food'} />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentThumbnail img={'veges'} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

// component content thumbnail


type ContentThumbnailProps = {
    img: 'burger' | 'food' | 'veges'
}
const ContentThumbnail: FC<ContentThumbnailProps> = ({ img }) => {
    return (
        <div className="w-full h-full flex flex-row justify-center items-center absolute z-10">
            {/* content left */}
            {
                img === 'burger' ? <TitleComponent /> : <TitleComponent title={img} />
            }

            {/* content right  */}
            <div className="flex-1 flex flex-col justify-center items-center w-full h-full  relative right-0  bg-orange-400 ">
                <div className="w-[90%] aspect-[16/9] flex flex-row justify-center items-center">
                    {
                        img === 'burger' && <LazyImage src={burger} alt="burger" className="w-full h-full object-cover" />
                    }
                    {
                        img === 'food' && <LazyImage src={food} alt="food" className="w-full h-full object-cover" />
                    }
                    {
                        img === 'veges' && <LazyImage src={veges} alt="veges" className="w-full h-full object-cover" />
                    }
                </div>
                <div className="absolute w-40 flex flex-row justify-center items-center top-12 -left-20">
                    <LazyImage src={leaf1} alt="leaf" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}


// burget title 
type TitleComponentProps = {
    title?: string;
}
const TitleComponent: FC<TitleComponentProps> = ({ title }) => {
    return (
        <div className="w-full h-full flex-1 flex flex-col justify-start items-center bg-transparent relative pt-6">
            <div className='w-60 aspect-[16/9] absolute bottom-0 -left-24'>
                <LazyImage src={kentangGoreng} alt="burger" className="w-full h-full object-cover" />
            </div>
            {/* leaf */}
            <div className={`w-14 aspect-[16/9] absolute top-4  -rotate-45 ${title ? 'right-50' : 'left-32'}`}>
                <LazyImage src={leaf2} alt="burger" className="w-full h-full object-cover" />
            </div>

            {/* title */}
            <div className={`w-full flex flex-col justify-start gap-4 pl-10 z-2 pt-10 ${title ? 'items-start' : 'items-center'}`}>
                {
                    title ? (
                        <>
                            <h2 className='text-3xl text-primary-matcha font-Dancing-Script'>
                                Delivery in 24th
                            </h2>
                            <div className='flex flex-col justify-start items-start mb-1'>
                                <h1 className='font-bold text-6xl text-white capitalize'>
                                    fresh {title}
                                </h1>
                                <h1 className='font-bold text-6xl text-white capitalize'>
                                    everyday
                                </h1>
                            </div>
                        </>
                    ) : (
                        <div className="w-full flex flex-row justify-center items-center relative mb-2">
                            <div className='w-[65%] aspect-[16/5]  flex flex-row justify-center items-center'>
                                <LazyImage src={titleBurger2} alt="title" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    )
                }

                <p className={`text-sm text-white w-[50%] ${title ? 'text-start' : 'text-center'}`}>
                    Order today and receive your package tomorrow by efway
                </p>
                {/* button purchase */}
                <button className={`uppercase text-to-small font-bold bg-primary-matcha text-white py-3 px-6 rounded-full  hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 ease-in-out ${title ? 'mt-5' : 'mt-3'}`}>
                    purchase now
                </button>
            </div>


        </div>
    )
}



export default SwiperThumb
