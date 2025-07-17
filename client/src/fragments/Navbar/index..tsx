import { useEffect, useRef, useState, type FC } from 'react'

// icons 
import { FaHeadset } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

// logo 
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)
    const [blur, setBlur] = useState(false)


    //  show navbar
    const lastScrollY = useRef(0);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY; // get current scroll

            // jika scroll ke atas
            if (currentScrollY > lastScrollY.current) {

                setShowNavbar(true);
            } else {   // jika scroll ke bawah
                setShowNavbar(false);
                if (currentScrollY > 10) {
                    setBlur(true)
                } else {
                    setBlur(false)
                }

            }

            lastScrollY.current = currentScrollY; // set last scroll 
        }

        document.addEventListener('scroll', handleScroll) // first mount

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])







    // router 
    const router: string[] = ['home', 'shop', 'page', 'blog', 'shortcode', 'on sale', 'contact']


    return (
        <div className={`w-full flex flex-row justify-between items-center py-2.5 fixed top-0 z-50  ${blur ? 'backdrop-blur-sm shadow-md' : 'bg-transparent'} ${showNavbar ? 'translate-y-0' : '-translate-y-full'} transition-all duration-300 ease-in-out `}>
            <div className='flex flex-row justify-center items-center px-7'>

                <img src={logo} alt="logo" className='w-24' />
            </div>

            {/* list router */}
            <div className='flex flex-row justify-center items-center '>
                {
                    router.map((item, index) => (
                        <Link key={index} to="/" className='mx-2.5 text-xs font-semibold text-slate-600 hover:text-primary-matcha transition-all duration-300 ease-in-out cursor-pointer capitalize'>
                            {item}
                        </Link>
                    ))
                }
            </div>
            {/* info */}
            <div className='flex flex-row justify-end items-center gap-14 px-7'>
                {/* customer service */}
                <button className='flex flex-row justify-start items-center gap-2'>
                    <FaHeadset className='text-primary-matcha text-xl' />
                    <div className='flex flex-col justify-end items-start'>
                        <p className='text-to-small'>call us</p>
                        <p className='text-to-small font-semibold text-primary-matcha'>(+91) 123-456-7890</p>
                    </div>
                </button>

                <div className='flex flex-row justify-start items-center gap-5'>
                    {/* login register */}
                    <button className='flex flex-row justify-start items-center gap-2'>
                        <div className='flex flex-row justify-center items-center w-8 h-8 bg-slate-200 rounded-full'>
                            <FaRegUser className=' text-md' />
                        </div>
                        <div className='flex flex-col justify-between items-start'>
                            <p className='text-to-small font-medium'>Login <span className='text-primary-matcha'>or</span></p>
                            <p className='text-to-small font-medium'>Register</p>
                        </div>
                    </button>

                    {/* favorite */}
                    <FavoriteCart type='favorite' count={3} />
                    <FavoriteCart type='cart' count={14} />
                </div>


            </div>

        </div>
    )
}



type FavoriteCartProps = {
    count: number;
    type: 'favorite' | 'cart';
}

// favortie & cart component 
const FavoriteCart: FC<FavoriteCartProps> = ({ type, count }) => {
    return (
        <button className='flex flex-row justify-center items-center p-1 relative'>
            {/* icon */}
            <div className='flex flex-row justify-center items-center bg-slate-200 w-8 h-8 rounded-full'>
                {
                    type === 'favorite' && <FaRegHeart className='text-black text-md' />
                }
                {
                    type === 'cart' && <HiOutlineShoppingBag className='text-black text-md' />
                }
            </div>
            {/* count  */}
            <div className={`flex flex-row justify-center items-center ${type === 'favorite' ? 'bg-orange-300' : 'bg-primary-matcha'} w-4 h-4 rounded-full absolute top-0 right-0 overflow-hidden`}>
                <p className='text-[0.5rem] font-semibold text-white'>{count}</p>
            </div>

        </button>
    )
}

export default Navbar
