import { useState, type FC } from 'react'
import { EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'


// img 
import orangeSplash from '../../assets/img/highlight/orange-splash.png'
import strawberySplash from '../../assets/img/highlight/strawbery-splash.png'
import pineappleSplash from '../../assets/img/highlight/pineapple-splash.png'
import berySplash from '../../assets/img/highlight/bery-splash.png'
import delimaSplash from '../../assets/img/highlight/delima-splash.png'

const SwiperHighLightProducts: FC = () => {
    return (
        <div className="w-full h-full relative">
            <Swiper
                modules={[Pagination, EffectFade]} // Tambahkan Autoplay di modules
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: (_: number, className: string): string => {
                        return `<span class="${className} custom-bullet"></span>`;
                    },
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                className="w-full h-full relative"
                slidesPerView={1}
                initialSlide={2}
            >
                <SwiperSlide>
                    <LayoutContent color='#eba200'>
                        <div className="w-[90%] absolute -bottom-20 -right-28 z-0 group-hover:scale-105 transition-all duration-700 ease-in-out">
                            <img src={orangeSplash} alt="orangeSplash" className="w-full h-full object-cover" loading='lazy' />
                        </div>
                    </LayoutContent>
                </SwiperSlide>
                <SwiperSlide>
                    <LayoutContent color='#ace169'>
                        <div className="w-[80%] absolute top-0 -right-8 z-0 group-hover:scale-105 transition-all duration-700 ease-in-out">
                            <img src={strawberySplash} alt="orangeSplash" className="w-full h-full object-cover" loading='lazy' />
                        </div>
                    </LayoutContent>
                </SwiperSlide>
                <SwiperSlide>
                    <LayoutContent color='#527826'>
                        <div className="w-[80%] absolute top-0 -right-16 z-0 group-hover:scale-105 transition-all duration-700 ease-in-out -rotate-20">
                            <img src={pineappleSplash} alt="orangeSplash" className="w-full h-full object-cover" loading='lazy' />
                        </div>
                    </LayoutContent>
                </SwiperSlide>
                <SwiperSlide>
                    <LayoutContent color='#ef6679'>
                        <div className="w-[80%] absolute top-0 -right-16 z-0 group-hover:scale-105 transition-all duration-700 ease-in-out ">
                            <img src={berySplash} alt="orangeSplash" className="w-full h-full object-cover" loading='lazy' />
                        </div>
                    </LayoutContent>
                </SwiperSlide>
                <SwiperSlide>
                    <LayoutContent color='#f1cb76'>
                        <div className="w-[80%] absolute top-0 -right-16 z-0 group-hover:scale-105 transition-all duration-700 ease-in-out ">
                            <img src={delimaSplash} alt="orangeSplash" className="w-full h-full object-cover" loading='lazy' />
                        </div>
                    </LayoutContent>
                </SwiperSlide>

            </Swiper>
            {/* custom pagination */}
            <div className="custom-pagination flex justify-center items-center z-10 mt-12 absolute bottom-0 w-full py-3 gap-1.5">

            </div>

        </div>
    )
}


type LayoutContentProps = {
    color: string
    children: React.ReactNode
}

// layout content 
const LayoutContent: FC<LayoutContentProps> = ({ color, children }) => {
    // state hover 
    const [hover, setHover] = useState(false);
    return (
        <div className={"w-full h-full relative shadow-[inset_0_0_200px_1px_rgba(0,0,0,0.1)] overflow-hidden rounded-md"} style={{ backgroundColor: color }}>
            {children}
            <div className="w-full h-full flex flex-col justify-center items-start z-2 pl-10 gap-1.5 absolute">
                <h4 className="capitalize font-Dancing-Script text-2xl font-bold text-white">
                    pomegranate
                </h4>
                <h1 className="capitalize text-4xl font-bold text-white mb-3">
                    fresh juice <br></br>100% organic
                </h1>
                <p className="text-white text-xs mb-8 w-[35%]">
                    A blend of freshly squeezed orange juice with natural vitamins and minerals
                </p>
                {/* button */}
                <button type="button" className={`text-to-small font-bold border-2 uppercase text-white rounded-full border-white py-2 px-6.5 hover:bg-white transition-all duration-300 ease-in-out`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ color: hover ? color : 'white' }}>
                    shop now
                </button>
            </div>
        </div>
    )
}

export default SwiperHighLightProducts
