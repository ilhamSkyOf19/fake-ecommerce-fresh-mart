import { type FC } from 'react'

const LoadingCardProduct: FC = () => {
    return (
        <div className='w-[14rem] h-[22rem] flex flex-col justify-start items-start bg-white opacity-100 rounded-md overflow-hidden animate-pulse'>
            <div className=" flex-1 w-full h-full flex flex-col justify-center items-center overflow-hidden p-3">
                <div className='w-full h-full bg-slate-200 opacity-60 rounded-md' />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start h-full w-full px-4 gap-1">
                {/* category */}
                <div className="w-[40%] h-[1rem] bg-slate-200 opacity-60 rounded-md " />
                {/* title */}
                <div className="w-full h-[2rem] bg-slate-200 opacity-60 rounded-md mb-2 " />
                {/* price and start*/}
                <div className="w-full flex flex-row justify-between items-start mb-5">
                    <div className="w-[40%] h-[1rem] bg-slate-200 opacity-60 rounded-md " />
                    <div className="w-[40%] h-[1rem] bg-slate-200 opacity-60 rounded-md " />
                </div>
                <div className="w-full h-7 flex flex-row justify-between items-center relative">
                    <div className="flex-1 flex-row justify-start items-center relative h-full">
                        <div className='w-[2rem] h-full flex flex-row justify-center items-center bg-slate-200 opacity-60 rounded-md mr-1' />
                    </div>
                    <div className="flex flex-row justify-end items-center gap-4">
                        <div className="w-8 h-8 flex flex-row justify-center items-center bg-slate-200 opacity-60 rounded-full" />
                        <div className="w-8 h-8 flex flex-row justify-center items-center bg-slate-200 opacity-60 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingCardProduct;
