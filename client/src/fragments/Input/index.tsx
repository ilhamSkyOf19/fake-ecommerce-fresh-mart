import type { FC } from "react"

const Input: FC = () => {
    return (
        <div className='w-full border-1 border-slate-300 rounded-full py-1 px-1.5 flex flex-row justify-between items-center'>
            <input
                type="text"
                placeholder='Search 100,000 products...'
                className='w-full h-full px-4 text-xs text-slate-600 placeholder:text-slate-600 placeholder:text-xs focus:outline-none'
            />
            <button className='bg-primary-matcha rounded-full text-to-small text-white py-1.5 px-6 border-1 border-primary-matcha hover:bg-white hover:text-primary-matcha transition-all duration-300 ease-in-out cursor-pointer font-semibold'>
                Search
            </button>
        </div>
    )
}

export default Input
