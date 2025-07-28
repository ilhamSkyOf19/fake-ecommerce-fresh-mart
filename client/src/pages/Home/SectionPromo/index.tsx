import { type FC } from "react"
import { LazyImage } from "../../../utils/LazyLoadImg"
import TimerComponent from "../../../components/TimerComponent"


// img

import blueberryBlur1 from '../../../assets/component/blueberry-blur-1.png'
import blueberryBlur2 from '../../../assets/component/blueberry-blur-2.png'
import leafBlur from '../../../assets/component/leaf-blur.png'
import strawberyJuice from '../../../assets/img/foods/strawbery-juice.png'



// icons
import { GoDotFill } from "react-icons/go";
import { useTimer } from "../../../hooks/UseTimer"


const SectionPromo: FC = () => {


    // set timer 
    const { days, hours, minutes, seconds } = useTimer(new Date('2025-08-01T00:00:00'))


    return (
        <div className="w-full h-[75vh] flex flex-col justify-start items-center px-7 mb-12">
            <div className="relative w-full h-full flex flex-col justify-start items-center">
                {/* bg */}
                <Background />
                {/* content */}
                <div className="w-full h-full bg-transparent z-2 flex flex-row justify-center items-center">
                    <div className="flex-1/12 w-full h-full flex row justify-end items-start pr-12">
                        <div className="w-3/4 h-full relative flex flex-col justify-start items-start top-12 pl-2 gap-2.5">
                            <h2 className="text-xl font-bold font-Dancing-Script capitalize text-orange-400">
                                deal of the day
                            </h2>
                            {/* title */}
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="text-4xl font-bold capitalize text-white">
                                    oars store
                                </h1>
                                <h1 className="text-4xl font-bold capitalize text-white">
                                    offer 50% off
                                </h1>
                            </div>
                            {/* price */}
                            <p className="text-sm font-semibold text-orange-400">
                                $17.99 <span className="line-through text-white">$29.99 </span>
                            </p>

                            {/* info */}
                            <div className="w-full flex flex-row justify-between items-center">
                                <p className="text-xs text-white leading-[1.1rem]">
                                    Fresh deal everyday. Get it <br></br> before time runs out!
                                </p>
                                <div className="w-[1px] h-[70%] bg-slate-100 opacity-50"></div>
                                {/* timer */}
                                <div className="flex flex-row justify-end items-center gap-0.5">
                                    <TimerComponent number={days} label="days" />
                                    <GoDotFill className="text-white text-xs" />
                                    <TimerComponent number={hours} label="hours" />
                                    <GoDotFill className="text-white text-xs" />
                                    <TimerComponent number={minutes} label="mins" />
                                    <GoDotFill className="text-white text-xs" />
                                    <TimerComponent number={seconds} label="secs" />
                                </div>
                            </div>
                            {/* button */}
                            <button type="button" className={`py-2.5 px-8.5 bg-primary-matcha text-to-small rounded-full text-white uppercase font-bold border-2 border-primary-matcha hover:border-white hover:bg-transparent transition-all ease-in-out hover:duration-300`} >
                                shop now
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 h-full flex flex-row justify-start items-start pt-5">
                        <div className="w-[60%] min-h-[60%]">
                            <LazyImage src={strawberyJuice} alt="strawbery-juice" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


// background
const Background: FC = () => {
    return (
        <div className="w-full h-[80%] bg-[#6c3c0c] rounded-md absolute overflow-hidden z-1">
            <div className="w-full h-full relative">
                <div className="w-24 h-24 top-4 left-4 absolute blur-xs">
                    <LazyImage src={blueberryBlur1} alt="blueberry" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-16 bottom-12 right-40 absolute">
                    <LazyImage src={blueberryBlur1} alt="blueberry" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 top-12 right-4 absolute blur-xs">
                    <LazyImage src={blueberryBlur2} alt="blueberry" className="w-full h-full object-cover" />
                </div>
                {/* leaf */}
                <div className="w-30 h-30 top-40 left-16 absolute blur-xs -rotate-90">
                    <LazyImage src={leafBlur} alt="blueberry" className="w-full h-full object-cover" />
                </div>
                <div className="w-30 h-30 -bottom-12 left-[30rem] absolute blur-xs rotate-90 scale-x-[-1]">
                    <LazyImage src={leafBlur} alt="blueberry" className="w-full h-full object-cover" />
                </div>
                <div className="w-30 h-30 top-4 left-[30rem] absolute blur-xs rotate-120">
                    <LazyImage src={leafBlur} alt="blueberry" className="w-full h-full object-cover" />
                </div>
                <div className="w-[5%] h-[17%]  rounded-full bg-transparent top-1/2 left-[67%] absolute shadow-[0_0_15rem_4rem_rgba(255,255,255,1)] animate-fade-in-fisrt"></div>
            </div>
        </div>
    )
}


export default SectionPromo
