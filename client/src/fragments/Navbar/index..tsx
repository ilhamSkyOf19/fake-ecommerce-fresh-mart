import { useEffect, useRef, useState, type FC } from 'react'

// icons 
import { FaHeadset } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useLocation } from 'react-router';

// logo 
import { Link } from 'react-router';

// type 
type Router = {
    label: string;
    link: string;
}

const Navbar = () => {
    // state
    const [showNavbar, setShowNavbar] = useState(true)
    const [blur, setBlur] = useState(false)


    //  show navbar
    const lastScrollY = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY; // get current scroll 

            // jika scroll ke bawah
            if (currentScrollY > lastScrollY.current) {
                setShowNavbar(false);
            } else {   // jika scroll ke atas
                setShowNavbar(true);
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
    const router: Router[] = [
        {
            label: 'home',
            link: '/'
        },
        {
            label: 'shop',
            link: '/'
        },
        {
            label: 'cart',
            link: '/cart'
        },
        {
            label: 'blog',
            link: '/'
        },
        {
            label: 'contact',
            link: '/'
        },
        {
            label: 'about',
            link: '/'
        }
    ]

    // pathname 
    const pathname = useLocation().pathname
    console.log(pathname)



    return (
        <div className={`w-full flex flex-row justify-between items-center py-2.5 fixed top-0 z-50  ${blur ? 'backdrop-blur-lg shadow-md' : 'bg-transparent'} ${showNavbar ? 'translate-y-0' : '-translate-y-full'} transition-all duration-300 ease-in-out px-7`}>
            <div className='flex flex-row justify-center items-center'>
                <h2 className='text-2xl font-bold text-primary-matcha'>E-FM</h2>
                {/* <img src={logo} alt="logo" className='w-24' /> */}
            </div>

            {/* list router */}
            <div className='flex flex-row justify-center items-center gap-5'>
                {
                    router.map((item, index) => (
                        <Link key={index} to={item.link} className={`px-1.5 text-xs font-semibold  hover:text-primary-matcha transition-all duration-300 ease-in-out cursor-pointer capitalize ${blur ? 'text-black' : pathname !== '/' ? 'text-black' : 'text-white'}`}>
                            {item.label}
                        </Link>
                    ))
                }
            </div>
            {/* info */}
            <div className='flex flex-row justify-end items-center gap-14 '>
                {/* customer service */}
                <button className='flex flex-row justify-start items-center gap-2'>
                    <FaHeadset className='text-primary-matcha text-xl' />
                    <div className='flex flex-col justify-end items-start'>
                        <p className={`text-to-small ${blur ? 'text-black' : pathname !== '/' ? 'text-black' : 'text-white'}`}>call us</p>
                        <p className='text-to-small font-semibold text-primary-matcha'>(+91) 123-456-7890</p>
                    </div>
                </button>

                <div className='flex flex-row justify-start items-center gap-5'>
                    {/* login register */}
                    <button className='flex flex-row justify-start items-center gap-2'>
                        <div className='flex flex-row justify-center items-center w-8 h-8 bg-slate-200 rounded-full'>
                            <FaRegUser className=' text-md' />
                        </div>
                        <div className={`flex flex-col justify-between items-start ${blur ? 'text-black' : pathname !== '/' ? 'text-black' : 'text-white'}`}>
                            <p className='text-to-small font-medium '>Login <span className='text-primary-matcha font-semibold'>or</span></p>
                            <p className='text-to-small font-medium '>Register</p>
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
        <Link to={type === 'favorite' ? '/' : '/cart'} className='flex flex-row justify-center items-center p-1 relative'>
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

        </Link>
    )
}

export default Navbar
