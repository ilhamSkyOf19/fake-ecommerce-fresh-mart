import { memo, useCallback, useEffect, useState, type FC } from "react"
import CardProducts from "../../../components/CardProducts"
import ButtonMore from "../../../components/ButtonMore"
import type { ProductResponse } from "../../../model/product-model";
import type { Fetch } from "../../../types/types";
import { fetchGetProductsByCategory } from "../../../helpers/fetch";
import LoadingCardProduct from "../../../components/LoadingCardProduct";


const SectionFeaturedProducts: FC = () => {
    // state
    const [loading, setLoading] = useState<boolean>(false);
    const [selected, setSelected] = useState<number>(0);
    const [products, setProducts] = useState<ProductResponse[] | null>([]);
    const [category, setCategory] = useState<Fetch['category']>('organic');


    // handle category
    const handleCategoryChange = useCallback((category: Fetch['category']) => {
        setCategory(category);
    }, []);


    // get 
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true); // Set loading to true before fetching
            // fetch products by category
            const products = await fetchGetProductsByCategory(category);
            if (products) {
                setProducts(products);

                setLoading(false); // Set loading to false after fetching

            } else {
                console.error('Failed to fetch products');
            }
        }
        fetchProducts();
    }, [category]);


    // category product
    const categorySelected: string[] = ['organic', 'fruits', 'seafood', 'wine & beer', 'bakery']




    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-start py-2'>
            {/* header */}
            <Header setSelected={setSelected} selected={selected} category={categorySelected} handleCategoryChange={handleCategoryChange} />

            {/* products */}
            <div className="flex flex-row justify-between items-start flex-wrap gap-4 p-7 mb-5">
                {
                    loading ? (
                        [0, 1, 2, 3, 4].map((_, index) => (
                            <LoadingCardProduct key={index} />
                        ))
                    ) : (
                        products?.map((item, index) => (
                            <CardProducts key={index} item={item} />
                        ))
                    )
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
    handleCategoryChange: (category: Fetch['category']) => void;
}

// header 
const Header: FC<HeaderProps> = ({ selected, setSelected, category, handleCategoryChange }) => {
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
                        <button key={index} type="button" onClick={() => { setSelected(index), handleCategoryChange(item as Fetch['category']) }} className={`flex flex-col justify-start items-center min-h-full px-2.5 text-xs font-semibold uppercase relative hover:text-primary-matcha transition-all ease-in-out hover:duration-300  after:content-[''] after:w-full after:h-[3.5px] after:bg-primary-matcha after:absolute after:bottom-0 after:left-0 after:origin-left ${selected === index ? 'after:scale-x-100' : 'after:scale-x-0'} after:duration-300`}>
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

const SectionFeaturedProductsMemo = memo(SectionFeaturedProducts);

export default SectionFeaturedProductsMemo;
