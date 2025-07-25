import { useState, type FC } from "react"
import CardProducts from "../../../components/CardProducts"
import ButtonMore from "../../../components/ButtonMore"

const SectionFeaturedProducts: FC = () => {

    // state
    const [selected, setSelected] = useState(0)

    // category product
    const category: string[] = ['organic', 'fruits', 'seafood', 'wine & beer', 'bakery']


    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-start py-2'>
            {/* header */}
            <Header setSelected={setSelected} selected={selected} category={category} />

            {/* products */}
            <div className="flex flex-row justify-between items-start flex-wrap gap-4 p-7 mb-5">
                {
                    [0, 1, 2, 3, 4].map((_, index) => (

                        <CardProducts key={index} />
                    ))
                }
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <ButtonMore link="/" />
            </div>

        </div>
    )
}


type HeaderProps = {
    selected: number;
    setSelected: (value: number) => void;
    category: string[];
}

// header 
const Header: FC<HeaderProps> = ({ selected, setSelected, category }) => {
    return (
        <div className="w-full h-[2.3rem] flex flex-row justify-between items-center px-7">
            {/* title */}
            <h1 className="w-full h-full text-left text-lg font-bold uppercase text-black relative after:content-[''] after:w-full after:h-[1px] after:bg-slate-400 after:absolute after:bottom-0 after:left-0">
                <span className="text-primary-matcha">featured</span> products
            </h1>

            {/* button */}
            <div className="relative w-full h-full flex flex-row justify-end items-start after:content-[''] after:w-full after:h-[1px] after:bg-slate-400 after:absolute after:bottom-0 after:left-0 gap-2 pt-0.5">
                {
                    category.map((item, index) => (
                        <button key={index} type="button" onClick={() => setSelected(index)} className={`flex flex-col justify-start items-center min-h-full px-2.5 text-xs font-semibold uppercase relative hover:text-primary-matcha transition-all ease-in-out hover:duration-300  after:content-[''] after:w-full after:h-[3.5px] after:bg-primary-matcha after:absolute after:bottom-0 after:left-0 after:origin-left ${selected === index ? 'after:scale-x-100' : 'after:scale-x-0'} after:duration-300`}>
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default SectionFeaturedProducts
