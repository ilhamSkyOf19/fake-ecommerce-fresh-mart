import { type FC } from 'react'
import { Link } from 'react-router';


// img & icon
import logo from '../../../assets/logo/logo.png'
import { LazyImage } from '../../../utils/LazyLoadImg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiGithub } from "react-icons/fi";
import { RiCustomerServiceFill } from "react-icons/ri";

const Footer: FC = () => {
    return (
        <div className='w-full min-h-[110vh] bg-white flex flex-col justify-center items-center '>
            {/* content one */}
            <div className='flex-1 w-full  flex flex-col justify-center items-center gap-4 relative after:content-[""] after:w-full after:h-[1px] after:bg-slate-200 after:absolute after:bottom-0 after:left-0 py-12'>
                <h2 className='text-lg font-bold uppercase text-black'>
                    newsletter
                </h2>
                <p className='text-xs text-black'>
                    Subscribe to the weekly newsletter for all the latest updates
                </p>
                {/* input */}
                <div className='w-[45%] border-1 rounded-full flex flex-row justify-between items-center border-primary-matcha py-1 px-1 gap-1'>
                    <input type='text' placeholder='Enter your email' className='text-xs focus:outline-none px-2.5 w-full' />
                    <button className='uppercase bg-primary-matcha rounded-full text-to-small py-2 px-5 text-white font-semibold hover:bg-white hover:text-primary-matcha transition-all duration-300 ease-in-out border-primary-matcha border-1'>
                        subscribe
                    </button>
                </div>
            </div>
            <FooterNavigation />
            {/* copyright */}
            <div className='w-full flex flex-row justify-center items-center py-4'>
                <p className='text-xs text-slate-600'>© 2023 Ecommerce. All rights reserved</p>
            </div>
        </div>
    )
}

// type navigation
type Navigation = {
    label: string;
    link: string;
}

// content footer navigation
const FooterNavigation: FC = () => {
    // category
    const category: string[] = ['company info', 'quick links', 'hot categories', 'contact us']


    // navigation
    const companyInfo: Navigation[] = [
        {
            label: 'about us',
            link: '/'
        },
        {
            label: 'careers',
            link: '/'
        },
        {
            label: 'social responsibility',
            link: '/'
        },
        {
            label: 'affliate program',
            link: '/'
        },
        {
            label: 'business with us',
            link: '/'
        },
        {
            label: 'find a store',
            link: '/'
        },
        {
            label: 'press & talent',
            link: '/'
        }
    ]

    const quickLinks: Navigation[] = [
        {
            label: 'special offers',
            link: '/'
        },
        {
            label: 'gift cards',
            link: '/'
        },
        {
            label: 'f21 red',
            link: '/'
        },
        {
            label: 'privacy policy',
            link: '/'
        },
        {
            label: 'jakarta privacy policy',
            link: '/'
        },
        {
            label: 'terms & conditions',
            link: '/'
        },
        {
            label: 'teams of use',
            link: '/'
        }
    ]

    // hot categories
    const hotCategories: Navigation[] = [
        {
            label: 'fruits',
            link: '/'
        },
        {
            label: 'vegetables',
            link: '/'
        },
        {
            label: 'meat',
            link: '/'
        },
        {
            label: 'fish',
            link: '/'
        },
        {
            label: 'drinks',
            link: '/'
        },
        {
            label: 'snacks',
            link: '/'
        },
        {
            label: 'bakery',
            link: '/'
        }
    ]


    return (
        <div className='flex-2 w-full h-full flex flex-col justify-center items-center px-20 gap-4 relative after:content-[""] after:w-full after:h-[1px] after:bg-slate-200 after:absolute after:bottom-0 after:left-0'>
            {/* category */}
            <div className='w-full flex flex-row justify-between items-center h-[3rem] gap-2'>
                <div className='flex-1  flex flex-row justify-start items-start'>
                    <div className='w-[60%]'>
                        <LazyImage src={logo} alt="logo" className="w-full h-full object-cover" />
                    </div>
                </div>
                {
                    category.map((item, index) => (
                        <div key={index} className='flex-1 flex flex-row justify-start items-start h-full  capitalize pt-2'>
                            <p className='text-xs text-black font-bold'>
                                {item}
                            </p>
                        </div>
                    ))
                }
            </div>
            {/* content */}
            <div className='w-full h-full flex flex-row justify-center items-start gap-2'>
                <div className='flex-1 flex flex-col justify-start items-start gap-4.5 h-full'>
                    <p className='text-to-small text-slate-700 w-[85%]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing  ipsa nesciunt sit repellat illo Lorem, ipsum dolor.
                    </p>
                    {/* social media */}
                    <SocialMedia />
                </div>
                <NavigationList link={companyInfo} />
                <NavigationList link={quickLinks} />
                <NavigationList link={hotCategories} />
                {/* contact us */}
                <div className='flex-1 flex flex-col justify-start items-start'>
                    <a href='/' className='flex flex-row justify-start items-center gap-2'>
                        <RiCustomerServiceFill className='text-3xl text-primary-matcha' />
                        <div className='flex flex-col justify-start items-center h-full'>
                            <p className='text-to-small text-slate-700 capitalize font-medium'>
                                through whatsapp
                            </p>
                            <p className='text-xs text-primary-matcha font-semibold'>
                                +628 123 456 789
                            </p>
                        </div>
                    </a>
                    {/* address */}
                    <a href='/' className='text-to-small text-slate-600 mt-2 hover:text-slate-900 transition-all duration-300 ease-in-out'>
                        Gym X, Jl. Jend. Sudirman Kav. 52, Jakarta, JKT 12940
                    </a>
                    {/* email */}
                    <a href='/' className='text-to-small text-slate-600 mt-2 hover:text-slate-900 transition-all duration-300 ease-in-out'>
                        support@example.com
                    </a>
                </div>

            </div>
        </div>
    )
}

type DataSocialMedia = {
    icon: string,
    link: string
}

// social media
const SocialMedia = () => {
    // social media
    const socialMedia: DataSocialMedia[] = [
        {
            icon: 'facebook',
            link: 'https://www.facebook.com'
        },
        {
            icon: 'twitter',
            link: 'https://www.twitter.com'
        },
        {
            icon: 'instagram',
            link: 'https://www.instagram.com'
        },
        {
            icon: 'linkedin',
            link: 'https://www.linkedin.com'
        },
        {
            icon: 'github',
            link: 'https://www.github.com'
        }
    ]
    return (
        <div className='flex flex-row justify-start items-center w-full gap-2'>
            {
                socialMedia.map((item, index) => (
                    <a key={index} href={`${item.link}`} target='_blank' className='w-[1.5rem] h-[1.5rem] border-[1px] border-slate-300 rounded-full flex flex-row justify-center items-center hover:scale-115 transition-transform duration-300 ease-in-out group'>
                        {
                            item.icon === 'facebook' && <FaFacebookF className=' text-[0.65rem] text-slate-600 group-hover:text-slate-800 transition-all duration-300 ease-in-out' />
                        }
                        {
                            item.icon === 'twitter' && <FaTwitter className=' text-[0.65rem] text-slate-600 group-hover:text-slate-800 transition-all duration-300 ease-in-out' />
                        }
                        {
                            item.icon === 'instagram' && <FaInstagram className=' text-[0.65rem] text-slate-600 group-hover:text-slate-800 transition-all duration-300 ease-in-out' />
                        }
                        {
                            item.icon === 'linkedin' && <FaLinkedinIn className=' text-[0.65rem] text-slate-600 group-hover:text-slate-800 transition-all duration-300 ease-in-out' />
                        }
                        {
                            item.icon === 'github' && <FiGithub className=' text-[0.65rem] text-slate-600 group-hover:text-slate-800 transition-all duration-300 ease-in-out' />
                        }


                    </a>
                ))
            }
        </div>
    )
}


type NavigationListProps = {
    link: Navigation[];
}
// navigation list 
const NavigationList: FC<NavigationListProps> = ({ link }) => {
    return (
        <div className='flex-1 flex flex-col justify-start items-start gap-2'>
            {
                link.map((item, index) => (
                    <Link key={index} to={item.link} className='text-to-small text-slate-600 capitalize hover:text-slate-900'>
                        {item.label}
                    </Link>
                ))
            }
        </div>
    )
}

export default Footer
