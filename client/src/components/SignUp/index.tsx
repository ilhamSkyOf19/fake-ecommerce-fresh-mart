import type { FC } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

// sign up props
type SignUpProps = {
    type: 'google' | 'facebook';
}
// sign up
const SignUp: FC<SignUpProps> = ({ type }) => {
    return (

        <a href='/' className='py-2 px-4 rounded-full flex flex-row justify-start items-start bg-primary-matcha gap-3 border-1 border-primary-matcha hover:bg-white transition-all hover:duration-300 ease-in-out group shadow-lg'>
            {
                type === 'google' ?
                    <FaGoogle className='text-md text-white group-hover:text-primary-matcha transition-all duration-300 ease-in-out' /> : <FaFacebookF className='text-md text-white group-hover:text-primary-matcha transition-all duration-300 ease-in-out' />
            }
            <p className='capitalize text-to-small text-white group-hover:text-black transition-all duration-300 ease-in-out'>sign up with {type}</p>
        </a>
    )
}

export default SignUp