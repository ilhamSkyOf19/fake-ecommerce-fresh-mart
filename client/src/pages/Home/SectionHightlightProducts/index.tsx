import type { FC } from "react"
import SwiperHighLightProducts from "../../../fragments/SwiperHighLightProducts"


// img 
import cerealDrop2 from "../../../assets/img/highlight/cereal-drop-2.png"
import strawberyJuice from "../../../assets/img/highlight/strawbery-juice.png"
const SectionHightlightProducts: FC = () => {
    return (
        <div className={'w-full min-h-[100vh] grid grid-cols-5 grid-rows-2 gap-4 px-24 py-12 '}>
            <div className="col-span-3 row-span-2 group h-[85vh]">
                <SwiperHighLightProducts />
            </div>
            <div className="col-span-2 row-span-2 grid grid-cols-1 grid-rows-2 gap-4">
                <ComponentHighlightCereal />
                <ComponentHighlightJuice />

            </div>
        </div>
    )
}

// component highlight cereal 
const ComponentHighlightCereal: FC = () => {
    return (
        <div className="col-span-1 row-span-1 ">
            <div className="w-full h-full relative rounded-md border overflow-hidden bg-[#864313] shadow-[inset_0_0_200px_2px_rgba(0,0,0,0.1)]">
                {/* shadow */}
                <div className="w-[10%] h-[16%] bg-white rounded-full absolute right-[24%] bottom-[10%] shadow-[0_0_10rem_3rem_rgba(255,255,255,1)]"></div>
                {/* img */}
                <div className="w-[60%] absolute top-0 right-0 z-0 group-hover:scale-105 transition-all duration-700 ease-in-out">
                    <img loading="lazy" src={cerealDrop2} alt="cereal" className="w-full h-full object-cover" />
                </div>
                {/* text */}
                <div className="absolute w-full h-full flex flex-col justify-center items-start pl-10 gap-2">
                    <h3 className="text-3xl font-bold text-white capitalize">
                        Breakfast <br></br> cereal
                    </h3>
                    <p className="capitalize text-xs text-white w-[30%] mb-4">
                        fresh vegetables sale 30% off
                    </p>
                    <button type="button" className="text-to-small font-medium border-[1.5px] capitalize text-white rounded-full border-white py-2 px-5.5 hover:bg-white hover:text-[#864313] transition-all duration-300 ease-in-out">
                        see our range
                    </button>
                </div>
            </div>
        </div>
    )
}

// component highlight juice
const ComponentHighlightJuice: FC = () => {
    return (
        <div className="col-span-1 row-span-1">
            <div className="w-full h-full relative rounded-md border overflow-hidden bg-[#ec2a37] shadow-[inset_0_0_200px_1px_rgba(0,0,0,0.1)]">
                {/* shadow */}
                <div className="w-[10%] h-[16%] bg-white rounded-full absolute left-[24%] bottom-[24%] shadow-[0_0_10rem_3rem_rgba(255,255,255,1)]"></div>
                {/* img */}
                <div className="w-[90%] absolute -bottom-32 -left-22 z-0 group-hover:scale-105 transition-all duration-700 ease-in-out -scale-x-100">
                    <img loading="lazy" src={strawberyJuice} alt="cereal" className="w-full h-full object-cover" />
                </div>
                {/* text */}
                <div className="absolute w-full h-full flex flex-col justify-center items-end">
                    <div className="w-1/2 h-full flex flex-col justify-center items-start gap-2 pl-3">
                        <h3 className="text-3xl font-bold text-white capitalize">
                            100% Pure <br></br> natural
                        </h3>
                        <p className="capitalize text-xs text-white w-[60%] mb-4">
                            orange juice 40% flat
                        </p>
                        <button type="button" className="text-to-small font-medium border-[1.5px] capitalize text-white rounded-full border-white py-2 px-5.5 hover:bg-white hover:text-[#ec2a37] transition-all duration-300 ease-in-out">
                            see our range
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHightlightProducts
