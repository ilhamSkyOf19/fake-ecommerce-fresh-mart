import { useState, type FC } from "react"
import { LazyImage } from "../../utils/LazyLoadImg"

// icons 
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import loadingSvg from "../../assets/component/loading.svg"

import IconCards from "../IconCards";


const CardProducts: FC = () => {
    // state loading
    const [loading, setLoading] = useState(false);
    const [loadingFavorite, setLoadingFavorite] = useState(false);
    const [loadingRepeat, setLoadingRepeat] = useState(false);
    const [cart, setCart] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [repeat, setRepeat] = useState(false);


    // handle loading
    const handleLoading = () => {
        setLoading(true); // Tampilkan loading langsung

        const timer = setTimeout(() => {
            setCart(!cart);      // Tampilkan cart
            setLoading(false);  // Sembunyikan loading
        }, 500);

        return () => clearTimeout(timer); // Clean up jika dibatalkan
    };

    // handle favorite
    const handleFavorite = () => {
        setLoadingFavorite(true); // Tampilkan loading langsung

        const timer = setTimeout(() => {
            setFavorite(!favorite);      // Tampilkan cart
            setLoadingFavorite(false);  // Sembunyikan loading
        }, 500);

        return () => clearTimeout(timer); // Clean up jika dibatalkan
    };

    // handle favorite
    const handleRepeat = () => {
        setLoadingRepeat(true); // Tampilkan loading langsung

        const timer = setTimeout(() => {
            setRepeat(!repeat);      // Tampilkan cart
            setLoadingRepeat(false);  // Sembunyikan loading
        }, 500);

        return () => clearTimeout(timer); // Clean up jika dibatalkan
    };


    return (
        <div className='w-[14rem] h-[22rem] flex flex-col justify-start items-start bg-white shadow-md rounded-md overflow-hidden'>
            <button type="button" className=" flex-1 w-full h-full flex flex-col justify-center items-center overflow-hidden">
                <LazyImage src={`./products/apple.png`} alt="products" className="w-full h-full object-cover" />
            </button>
            <div className="flex-1 flex flex-col justify-start items-start h-full w-full px-4 gap-1">
                {/* category */}
                <p className="font-medium text-to-small text-primary-matcha italic capitalize">
                    organic
                </p>
                {/* title */}
                <p className="font-bold text-md mb-1.5">
                    Lorem ipsum dolor sit Lorem, ipsum.
                </p>
                {/* price and start*/}
                <div className="w-full flex flex-row justify-between items-start mb-5">
                    <p className="text-xs text-orange-300 font-semibold">
                        $30.00
                    </p>
                    <p className="text-xs font-semibold capitalize">
                        sold: <span className="font-normal">455</span>
                    </p>
                </div>
                <div className="w-full h-7 flex flex-row justify-between items-center relative">
                    <div className="flex-1 flex-row justify-start items-center relative h-full">
                        {
                            loading ? (
                                <img src={loadingSvg} alt="loading" className="w-12 h-12 absolute -left-[0.7rem] -top-3" />
                            ) : (
                                <button type="button" onClick={handleLoading}>
                                    {
                                        cart ? (
                                            <BsFillCartCheckFill className="text-2xl text-black cursor-pointer" />
                                        ) : (
                                            <BsCartPlusFill className="text-2xl text-primary-matcha cursor-pointer" />
                                        )
                                    }
                                </button>
                            )
                        }
                    </div>
                    <div className="flex flex-row justify-end items-center">
                        <IconCards loading={loadingFavorite} handleLoading={handleFavorite} type="favorite" icon={favorite} />
                        <IconCards loading={loadingRepeat} handleLoading={handleRepeat} type="repeat" icon={repeat} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CardProducts
