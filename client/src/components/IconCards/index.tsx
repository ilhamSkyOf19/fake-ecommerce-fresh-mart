// icons 
import type { FC } from "react";
import loadingSvg from "../../assets/component/loading.svg"

// icons
import { FaRegHeart } from "react-icons/fa";
import { IoRepeatSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";


type IconCardsProps = {
    loading: boolean;
    handleLoading: () => void;
    icon?: boolean;
    type: 'favorite' | 'repeat';
}

const IconCards: FC<IconCardsProps> = ({ loading, handleLoading, type, icon }) => {
    return (
        <div className="w-12 flex flex-col justify-center items-end h-full relative ">
            {
                loading ? (
                    <img src={loadingSvg} alt="loading" className="w-12 h-12 absolute -right-[0.5rem] -top-6.5" />
                ) : (
                    <button type="button" onClick={handleLoading} className="w-8 h-8 flex flex-row justify-center items-center bg-slate-100 rounded-full">
                        {
                            icon ? (
                                type === 'favorite' && <FaHeart className="text-md text-red-500" />
                            ) : (
                                type === 'favorite' && <FaRegHeart className="text-md text-black" />
                            )
                        }
                        {
                            type === 'repeat' && <IoRepeatSharp className={`text-md text-black ${icon && 'text-primary-matcha'}`} />
                        }

                    </button>

                )
            }
        </div>
    )
}

export default IconCards
