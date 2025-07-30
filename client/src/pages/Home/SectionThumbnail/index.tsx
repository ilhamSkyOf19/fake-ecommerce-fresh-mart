import { type FC } from "react"


// img 
import brush from "../../../assets/component/brush.png"

// icon
import SwiperThumb from "../../../fragments/Swiper"
import { LazyImage } from "../../../utils/LazyLoadImg"
const SectionThumbnail: FC = () => {
    console.log('ini di render')
    return (
        <div className="w-full min-h-[100vh] flex flex-row justify-center items-end bg-slate-800 relative overflow-hidden">
            <div className="w-full h-full absolute opacity-30">
                <LazyImage src={brush} alt="brush" className="w-full h-full object-cover" />
            </div>
            {/* swiper */}
            <SwiperThumb />


        </div>
    )
}



export default SectionThumbnail
