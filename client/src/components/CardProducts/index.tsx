import { useState, type FC } from "react"
import { LazyImage } from "../../utils/LazyLoadImg"

// icons 
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import loadingSvg from "../../assets/component/loading.svg"

import IconCards from "../IconCards";
import type { ProductResponse } from "../../model/product-model";
import { formatUsd } from "../../utils/formatCurrency";

// type props 
type Props = {
    item?: ProductResponse | null;
}


const CardProducts: FC<Props> = ({ item }) => {
    // state loading
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingFavorite, setLoadingFavorite] = useState<boolean>(false);
    const [loadingRepeat, setLoadingRepeat] = useState<boolean>(false);
    const [cart, setCart] = useState<boolean>(false);
    const [favorite, setFavorite] = useState<boolean>(false);
    const [repeat, setRepeat] = useState<boolean>(false);


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
                <LazyImage src={`./products/${item?.img || ''}`} alt="products" className="w-full h-full object-cover" />
            </button>
            <div className="flex-1 flex flex-col justify-start items-start h-full w-full px-4 gap-1">
                {/* category */}
                <p className="font-medium text-to-small text-primary-matcha italic capitalize ">
                    {item?.category || ''}
                </p>
                {/* title */}
                <p className="font-bold text-sm mb-1.5 min-h-[3rem]">
                    {item?.title || ''}
                </p>
                {/* price and start*/}
                <div className="w-full flex flex-row justify-between items-start mb-5">
                    <p className="text-xs text-orange-300 font-semibold">
                        {formatUsd(item?.price || 0)}
                    </p>
                    <p className="text-xs font-semibold capitalize">
                        stock: <span className="font-normal">{item?.stock || 0}</span>
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
                                            <BsFillCartCheckFill className="text-2xl text-primary-matcha cursor-pointer" />
                                        ) : (
                                            <BsCartPlusFill className="text-2xl text-black cursor-pointer" />
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
