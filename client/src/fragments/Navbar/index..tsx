import { type FC } from 'react'

// icons 
import { MdOutlineLocationOn } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

// logo 
import logo from '../../assets/logo/logo.png'
import Input from '../Input';
import { Link } from 'react-router';

const Navbar: FC = () => {
    return (
        <div className='w-full flex-col flex justify-center items-center bg-white shadow-sm'>
            {/* content one */}
            <ContentOne />

            {/* content two */}
            <ContentTwo />
        </div>
    )
}

// content one 
const ContentOne: FC = () => {
    return (
        <div className='w-full py-2 flex flex-row justify-between items-center relative after:content-[""] after:w-full after:h-[1.2px] after:bg-slate-300 after:absolute after:bottom-0'>
            <p className='text-to-small text-slate-700 px-5'>
                New Offers This Weekend only to <span className='text-primary-matcha'>Get 50%</span> Flate
            </p>

            <div className='flex flex-row justify-end items-center px-5 gap-3'>
                {/* subtitle  */}
                <button className=' flex flex-row justify-start items-start gap-0.5 cursor-pointer'>
                    <p className='text-to-small text-slate-700'>English</p>
                    <IoIosArrowDown className='text-to-small text-slate-700 pt-[1px] h-full' />
                </button>

                {/* location */}
                <button className='px-4 flex flex-row justify-start items-start relative before:content-[""] before:absolute before:w-[1px] before:h-[200%] before:-top-2 before:bg-slate-300 before:left-0 before:origin-center after:content-[""] after:absolute after:w-[1px] after:h-[200%] after:-top-2 after:bg-slate-300 after:right-0 after:origin-center gap-1 cursor-pointer'>
                    <MdOutlineLocationOn className='text-sm text-slate-700' />
                    <p className='text-to-small text-slate-700 capitalize'>store location</p>
                </button>

                {/* customer support */}
                <button className='flex flex-row justify-start items-center gap-1.5 cursor-pointer'>
                    <FaHeadset className='text-sm text-slate-700' />
                    <p className='text-to-small text-slate-700'>(+123) 456-7890</p>
                </button>
            </div>
        </div>
    )
}

// content two
const ContentTwo: FC = () => {
    // const link router 
    const router: string[] = ['home', 'shop', 'page', 'blog', 'shortcode', 'on sale', 'contact']
    return (
        <div className='w-full flex flex-row justify-start items-center'>
            {/* logo */}
            <div className='flex flex-row justify-center items-center px-14 py-8 relative after:content-[""] after:w-[1px] after:h-full after:bg-slate-300 after:absolute after:right-0'>
                <img src={logo} alt="logo" className='w-40 ' />
            </div>

            <div className='w-full h-full flex flex-col justify-between items-start px-5 pt-4 gap-2'>
                <div className=' w-full h-full flex flex-row justify-between items-start'>
                    <div className='flex-2 flex flex-row justify-center items-center'>
                        {/* input  */}
                        <Input />

                    </div>

                    <div className='flex-1 flex flex-row justify-end items-center gap-4'>
                        {/* login, favorite, cart, total price cart  */}
                        <ButtonLoginRegister />

                        {/* button favorite and cart  */}
                        <ButtonFavoriteCart totalItem={2} typeIcon='favorite' />
                        {/* button favorite and cart  */}
                        <ButtonFavoriteCart totalItem={2} typeIcon='cart' />
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    {
                        router.map((item, index) => (
                            <LinkRouter key={index} label={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


// login register button 
const ButtonLoginRegister: FC = () => {
    return (

        <div className='flex flex-row justify-start items-start'>
            <button className='flex flex-row justify-start items-center gap-2 cursor-pointer'>
                <div className='p-2 bg-gray-100 rounded-full flex justify-center items-center'>
                    <FaRegUser className='text-lg text-slate-700 ' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-to-small text-slate-700 font-semibold'>Login <span className='text-primary-matcha'>or</span></p>
                    <p className='text-to-small text-slate-700 font-semibold'>Register</p>
                </div>
            </button>
        </div>
    )
}


type CartType = {
    totalItem: number
    typeIcon: string
}

// button favorite and cart 
const ButtonFavoriteCart: FC<CartType> = ({ totalItem, typeIcon }) => {

    return (
        <button className='flex flex-row justify-center items-center p-1 relative'>
            <div className='p-2 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer'>
                {typeIcon === 'cart' && <HiOutlineShoppingBag className='text-xl text-slate-700' />}
                {typeIcon === 'favorite' && <FaRegHeart className='text-lg text-slate-700' />}
            </div>
            <p className={`text-[0.55rem] font-medium text-white ${typeIcon === 'cart' ? 'bg-primary-matcha' : 'bg-orange-300'} w-4 h-4 rounded-full flex justify-center items-center absolute top-0 right-0`}>{totalItem}</p>
        </button>
    )
}

type LinkRouterProps = {
    label: string
}
// link router 
const LinkRouter: FC<LinkRouterProps> = ({ label }) => {
    return (
        <div className='px-2 py-1 flex flex-row justify-start items-center'>
            <Link to='/' className='text-xs text-slate-700 font-semibold hover:text-primary-matcha transition-all duration-300 ease-in-out cursor-pointer capitalize'>
                {label}
            </Link>
        </div>
    )
}
export default Navbar
