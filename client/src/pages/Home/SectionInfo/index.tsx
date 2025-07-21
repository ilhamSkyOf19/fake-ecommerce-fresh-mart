import type { FC } from "react"
import { LazyImage } from "../../../utils/LazyLoadImg"


// img
import brushLine from "../../../assets/component/brush-line.png"
import salmonMeat from "../../../assets/img/info/salmon-meat.jpg"
import mint from "../../../assets/img/info/mint.jpg"
import plate from "../../../assets/img/info/launch-plate.png"
import kolSawi from "../../../assets/img/info/kol-sawi.png"
import strawbery from "../../../assets/img/info/strawbery.png"
import seeds from "../../../assets/component/seeds.png"

const SectionInfo: FC = () => {




    return (
        <div className='w-full h-[100vh] flex justify-center items-center relative'>
            {/* bg */}
            <div className="bg-white w-full h-[88%] absolute bottom-0 z-1">
                <div className="w-[27rem] aspect-[16/9] absolute -right-[9rem] top-8 opacity-40 ">
                    <LazyImage src={brushLine} alt="brush" className="w-full h-full object-cover" />
                </div>
            </div>



            {/* content */}
            <div className="w-full h-full flex flex-row justify-center items-center z-2 gap-14">
                <div className="flex-1 h-full flex flex-col justify-start items-end relative">
                    <div className="w-full min-h-[17rem] rounded-r-md overflow-hidden group cursor-pointer">
                        <div className="w-full h-full group-hover:scale-105 transition-all duration-700 ease-in-out">
                            <LazyImage src={salmonMeat} alt="salmon-meat" className="w-full h-full object-cover " />

                        </div>
                    </div>
                    <div className="absolute w-[17rem] min-h-[20rem] top-48 right-20 rounded-md overflow-hidden border-5 border-white group cursor-pointer">
                        <div className="w-full h-full group-hover:scale-105 duration-700 ease-in-out">
                            <LazyImage src={mint} alt="mint" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* desxcription */}
                <div className="flex-1 h-full flex flex-col justify-start items-start pt-38 gap-5 relative">
                    {/* plate */}
                    <div className="absolute w-[25rem] min-h-[20rem] -right-[15rem] top-48">
                        <LazyImage src={plate} alt="plate" className="w-full h-full object-cover" />
                    </div>
                    {/* mint */}
                    <div className="w-[13rem] min-h-[10rem] absolute right-0 -top-4">
                        <LazyImage src={seeds} alt="mint" className="w-full h-full object-cover" />
                    </div>


                    {/* title */}
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="text-4xl font-bold capitalize text-slate-800">
                            fresh fruit
                        </h2>
                        <h2 className="text-4xl font-bold capitalize text-slate-800">
                            & vegetables
                        </h2>
                    </div>

                    {/* sub title */}
                    <p className="text-primary-matcha text-xs font-semibold">
                        Order Now! and Get 50% Off
                    </p>

                    <div className="w-[60%]">
                        <p className="text-to-small text-slate-700 leading-[1.2rem] py-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse inventore mollitia dolorum autem, tempore sapiente minima cum, saepe, cupiditate expedita nisi sed Lorem ipsum dolor sit. perspiciatis Lorem, ipsum dolor. vero! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, amet?
                        </p>
                    </div>

                    {/* cards */}
                    <div className="flex flex-col justify-start items-start gap-5 ">
                        <Cards labelRaw={'therefore | always'} category="vegetables" />
                        <Cards labelRaw={'college in | virginia'} category="fruits" />
                    </div>
                </div>
            </div>
        </div>
    )
}


type CardsProps = {
    category: 'vegetables' | 'fruits';
    labelRaw: string;
}
// card info 
const Cards: FC<CardsProps> = ({ labelRaw, category }) => {

    // split label 
    const label: string[] = labelRaw.split('|')

    return (
        <div className="flex flex-row justify-start items-start gap-4">
            <div className="w-14 h-14 rounded-md bg-white border border-slate-200 p-0.5">
                {
                    category === 'vegetables' && <LazyImage src={kolSawi} alt="kol-sawi" className="w-full h-full object-cover" />
                }
                {
                    category === 'fruits' && <LazyImage src={strawbery} alt="strawbery" className="w-full h-full object-cover" />
                }
            </div>
            <div className="h-full flex flex-col justify-start items-start gap-1">
                <p className="text-[0.55rem] font-medium text-primary-matcha capitalize italic">
                    {category}
                </p>
                <p className="text-to-small font-semibold text-black capitalize">
                    {
                        `${label[0]} `
                    }
                    <br></br> &
                    {
                        `${label[1]} `
                    }
                </p>
            </div>
        </div>
    )
}

export default SectionInfo
