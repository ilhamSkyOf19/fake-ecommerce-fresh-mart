import type { FC } from "react"
import CardsNews from "../../../components/CardsNews"

const SectionNews: FC = () => {
    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-start px-7 gap-10'>
            <div className="w-full h-[2.3rem] relative flex flex-row justify-start items-start pb-3 after:content-[''] after:w-full after:h-[1px] after:bg-slate-400 after:absolute after:bottom-0 after:left-0">
                <h2 className="text-lg font-bold text-primary-matcha uppercase">
                    news <span className="text-black">& blogs</span>
                </h2>
                {/* container card */}
            </div>
            <ContainerCards />
        </div>
    )
}

// container card
const ContainerCards: FC = () => {
    return (
        <div className="py-2 w-full flex flex-row justify-center items-start gap-12 flex-wrap">
            {/* cards */}
            <CardsNews />
            <CardsNews />
            <CardsNews />
            <CardsNews />
        </div>
    )
}

export default SectionNews
