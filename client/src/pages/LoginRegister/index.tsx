import { useState, type FC } from 'react'
import { LazyImage } from '../../utils/LazyLoadImg'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// img
import veges from '../../assets/img/imgLogin/veges.jpg'
import burgers from '../../assets/img/imgLogin/burgers.jpg'


// icons
import Register, { type RegisterProps } from './Register';
import { useLoginAnimation } from '../../hooks/UseAnimatedLogin';
import { useNavigate } from 'react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { UserService } from '../../services/user.service';
const LoginRegister: FC = () => {
    // state 
    const [login, setLogin] = useState<boolean | null>(null);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [agreement, setAgreement] = useState<boolean>(false);

    // console.log(login)

    const hadnleSignUp = async () => {
        if (!name || !email || !username || !password) return alert('Please fill all the fields');

        const response = await UserService.create({ name, email, username, password });

        if (response.success) {
            setLogin(true);
        } else {
            if (response.errors) {
                alert(response.errors[0].message);
            }
        }
    };



    return (
        <div className='w-full h-[100vh] flex flex-row justify-center items-center bg-white p-3'>
            {/* content img */}
            <SwiperImg login={login} />
            {/* content input */}
            <ContentInput login={login} name={name} setName={setName} email={email} setEmail={setEmail} username={username} setUsername={setUsername} password={password} setPassword={setPassword} agreement={agreement} setAgreement={setAgreement} setLogin={setLogin} handleSignUp={hadnleSignUp} />

        </div>
    )
}


type SwiperImgProps = {
    login: boolean | null;
}

// Content Img 
const SwiperImg: FC<SwiperImgProps> = ({ login }) => {
    // animated 
    const { animateClass, showLogin } = useLoginAnimation(login, 500, true);

    return (
        <div className={`flex-1 w-full h-full relative transform ${animateClass} transition-transform duration-1000 ease-in-out overflow-hidden`}>
            <div className='w-full h-full relative'>
                {/* custom prev next */}
                <div className={`w-full flex flex-row items-center absolute bottom-0 left-0 px-9 py-2 gap-2 ${showLogin ? 'justify-start' : 'justify-end'}`}>
                    <div className='flex flex-row items-center gap-2'>
                        {/* prev */}
                        <button className='swiper-button-prev-custom z-100 transform bg-transparent border-1 border-white rounded-full w-9 h-9 flex items-center justify-center hover:border-white hover:bg-primary-matcha  transition-all duration-300 ease-in-out'>
                            <FaArrowLeft className='text-sm text-white' />
                        </button>
                        {/* next */}
                        <button className='swiper-button-prev-custom z-100 transform bg-transparent border-1 border-white rounded-full w-9 h-9 flex items-center justify-center hover:border-white hover:bg-primary-matcha transition-all duration-300 ease-in-out'>
                            <FaArrowRight className='text-sm text-white' />
                        </button>
                    </div>
                </div>

                {/* swiper */}
                <Swiper
                    modules={[Navigation, EffectFade, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={1000}
                    effect='fade'
                    fadeEffect={{ crossFade: true }}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    allowTouchMove={true}
                    className='relative w-full h-full overflow-hidden'
                >
                    <SwiperSlide>
                        <ContentImg showLogin={showLogin}>
                            <LazyImage src={veges} alt="borcoli" className="w-full h-full object-cover" />
                        </ContentImg>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ContentImg showLogin={showLogin} >
                            <LazyImage src={burgers} alt="burgers" className="w-full h-full object-cover" />
                        </ContentImg>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}


type ContentInputProps = RegisterProps & {
    login: boolean | null;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    handleSignUp: () => void
}

// Content Input 
const ContentInput: FC<ContentInputProps> = ({ login, name, setName, email, setEmail, username, setUsername, password, setPassword, agreement, setAgreement, setLogin, handleSignUp }) => {

    // animated
    const { animateClass, showLogin } = useLoginAnimation(login);


    // route
    const route = useNavigate();


    return (
        <>

            <div className={`flex-1 h-full ${animateClass} flex flex-col justify-start items-center`}>
                <div className='w-full flex-row justify-between items-center px-5'>
                    <button type='button' onClick={() => route(-1)} className='flex flex-row justify-start items-center gap-2 group'>
                        <FaArrowLeftLong className='text-md group-hover:text-primary-matcha transition-all duration-200 ease-in-out' />
                        <p className='text-sm font-semibold group-hover:text-primary-matcha transition-all duration-200 ease-in-out'>Back</p>
                    </button>
                </div>
                <Register name={name} setName={setName} email={email} setEmail={setEmail} username={username} setUsername={setUsername} password={password} setPassword={setPassword} agreement={agreement} setAgreement={setAgreement} setLogin={setLogin} showLogin={showLogin} handleSignUp={() => { handleSignUp() }} />
            </div>

        </>
    )
}



type ContentImgProps = {
    showLogin: boolean | null;
    children: React.ReactNode
}

// content img 
const ContentImg: FC<ContentImgProps> = ({ showLogin, children }) => {
    return (
        <div className='w-full h-full flex flex-row justify-center items-center'>
            <div className='w-full h-full rounded-4xl overflow-hidden'>
                {children}
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-start'>
                <div className='flex-1 w-full flex flex-col justify-start items-start px-9 py-7 gap-10'>
                    {/* logo */}
                    <h2 className={`font-semibold text-white text-xl w-full ${showLogin ? 'text-right' : 'text-left'}`}>
                        E-Mart
                    </h2>
                    {/* desc */}
                    <p className={`text-white text-3xl font-bold w-full ${showLogin ? 'text-right' : 'text-left'}`}>
                        Welcome to E-Mart Online Shop Website
                    </p>
                </div>
                <div className='flex-1 w-full flex flex-col justify-end items-start px-9 pb-3'>
                    <p className={`text-white text-sm font-medium w-full ${showLogin ? 'text-right' : 'text-left'}`}>E-mart group of companies</p>
                </div>
            </div>
        </div>
    )
}





export default LoginRegister
