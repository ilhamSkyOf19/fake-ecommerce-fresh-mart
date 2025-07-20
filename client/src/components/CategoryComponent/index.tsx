import type { FC } from "react"
import type { CategoryProps } from "../../model/category"
import { PiBread, PiCarrotLight, PiWine } from "react-icons/pi"
import { IoFastFoodOutline } from "react-icons/io5"
import { RiSeedlingLine } from "react-icons/ri"

const CategoryComponent: FC<CategoryProps> = ({ text1, text2, type }) => {
    return (
        <div className='w-[8.5rem] h-[4rem] flex flex-row justify-start items-center bg-white rounded-md pl-5 gap-2.5'>
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

export default CategoryComponent