import { useEffect, useRef, useState, type ChangeEvent, type FC } from 'react'
import LayoutPage from '../../Layouts/LayoutPage'
import { LazyImage } from '../../utils/LazyLoadImg'
import { formatUsd } from '../../utils/formatCurrency'

// icons
import { RiVisaLine } from "react-icons/ri";
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { FaPaypal } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";

const Cart: FC = () => {
    // count 
    const [count, setCount] = useState<number>(1);
    const stock: number = 3
    // handle count 
    const handleCount = (type: 'plus' | 'minus') => {
        // plus
        if (type === 'plus') {
            // cek stock
            if (count >= stock) {
                setCount(count)
            } else {
                setCount(count + 1)
            }
        } else {
            if (count <= 0) {
                setCount(count)
            } else {
                setCount(count - 1)
            }
        }
    }

    // price 
    const price: number = 80;

    return (
        <LayoutPage>
            <div className='w-full h-[100vh] overflow-hidden flex flex-row justify-center items-center '>
                {/* content left */}
                <div className='flex-4 w-full h-full flex flex-col justify-start items-start pl-7 pr-20'>
                    <div className='flex-1 w-full h-full flex flex-row justify-between items-end pb-3 relative after:content-[""] after:w-full after:h-[1.2px] after:bg-slate-400 after:absolute after:bottom-0 after:left-0'>
                        <h2 className='capitalize text-xl font-semibold'>
                            shopping cart
                        </h2>
                        {/* total cart */}
                        <h3 className='capitalize text-sm font-semibold'>
                            3 items
                        </h3>
                    </div>
                    <div className='w-full flex-4 flex flex-col justify-start items-start gap-2 pt-4'>
                        {/* title */}
                        <div className='w-full flex flex-row justify-start items-start gap-12'>
                            <div className='flex-2 w-full h-full'>
                                <h4 className='text-sm font-bold uppercase text-slate-700'>
                                    products details
                                </h4>
                            </div>
                            <div className='flex-2 w-full h-full '>
                                <h4 className='text-sm font-bold uppercase text-slate-700'>
                                    quality
                                </h4>
                            </div>
                            <div className='flex-1 w-full h-full '>
                                <h4 className='text-sm font-bold uppercase text-slate-700'>
                                    price
                                </h4>
                            </div>
                            <div className='flex-1 w-full h-full '>
                                <h4 className='text-sm font-bold uppercase text-slate-700'>
                                    total
                                </h4>
                            </div>
                        </div>
                        {/* container cart */}
                        <div className='flex flex-col justify-start items-start w-full gap-1 pt-3 h-[69vh] overflow-y-scroll'>
                            <CardsCart handleCount={handleCount} count={count} price={price} />
                            <CardsCart handleCount={handleCount} count={count} price={price} />
                            <CardsCart handleCount={handleCount} count={count} price={price} />
                            <CardsCart handleCount={handleCount} count={count} price={price} />
                            <CardsCart handleCount={handleCount} count={count} price={price} />
                            <CardsCart handleCount={handleCount} count={count} price={price} />
                            <CardsCart handleCount={handleCount} count={count} price={price} />
                            <CardsCart handleCount={handleCount} count={count} price={price} />
                        </div>
                    </div>
                </div>
                {/* content right  */}
                <ContentRight totalRaw={price} />
            </div>
        </LayoutPage >
    )
}


type CardsCartProps = {
    handleCount: (type: 'plus' | 'minus') => void
    count: number;
    price: number;
}

// cards cart 
const CardsCart: FC<CardsCartProps> = ({ handleCount, count, price }) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    // total price 
    useEffect(() => {
        setTotalPrice(price * count);
    }, [count])


    return (
        <div className='w-full flex flex-row justify-start items-start gap-12'>
            <div className='flex-2 w-full h-full flex flex-row justify-start items-center pl-2'>
                <div className='w-[50%] overflow-hidden'>
                    <LazyImage src='/products/apple.png' alt='apple' className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='flex-2 w-full h-full flex flex-col justify-start items-start gap-3 pt-4'>
                {/* title product */}
                <h4 className='text-sm text-black font-semibold pr-2'>
                    Lorem ipsum dolor sit Lorem, ipsum.
                </h4>
                {/* count cart */}
                <div className='w-[35%] flex flex-row justify-between items-center'>
                    <button type='button' onClick={() => handleCount('plus')}>
                        <FaPlus className='text-xs text-black' />
                    </button>
                    <div className='flex flex-row justify-center items-center h-[1.4rem] w-[2.2rem] rounded-md border-1'>
                        <p className='text-xs font-semibold text-black'>{count}</p>
                    </div>
                    <button type='button' onClick={() => handleCount('minus')}>
                        <FaMinus className='text-xs text-black' />
                    </button>
                </div>
            </div>
            <div className='flex-1 w-full h-full flex flex-col justify-start items-start pt-4'>
                <p className='text-sm font-semibold'>
                    {formatUsd(price)}
                </p>
            </div>
            <div className='flex-1 w-full h-full flex flex-col justify-start items-start pt-4 '>
                <p className='text-sm font-semibold'>
                    {formatUsd(totalPrice)}
                </p>
            </div>
        </div>
    )
}


type ContentRightProps = {
    totalRaw: number
}

// content right 
const ContentRight: FC<ContentRightProps> = ({ totalRaw }) => {


    // state 
    const [showCard, setShowCard] = useState<boolean>(false);
    const [cardSelected, setCardSelected] = useState<'paypal' | 'mastercard' | 'visa' | 'nothing'>('nothing');
    const [promoCode, setPromoCode] = useState<string>('');
    const modalShowCard = useRef<HTMLDivElement>(null);
    const buttonModal = useRef<HTMLButtonElement>(null);
    const [failedPromoAlert, setFailedPromoAlert] = useState<boolean>(false);
    const [successPromoAlert, setSuccessPromoAlert] = useState<boolean>(false);
    const [successPromo, setSuccessPromo] = useState<boolean>(false);
    const [totalCost, setTotalCost] = useState<number>(totalRaw);


    // promo code 
    const promoCodeList: string[] = ['12345', '111111'];





    // handle show card 
    const handleShowCard = () => setShowCard(!showCard);

    // handle click outside 
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalShowCard.current && !modalShowCard.current.contains(event.target as Node) && buttonModal.current && !buttonModal.current.contains(event.target as Node)) {
                setShowCard(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // handle selected card 
    const handleSelectedCard = (value: 'paypal' | 'mastercard' | 'visa' | 'nothing') => setCardSelected(value);

    // handle input promo code 
    const handleChangePromoCode = (e: ChangeEvent<HTMLInputElement>) => {
        // set failed && success
        setFailedPromoAlert(false);
        setSuccessPromoAlert(false);
        // set promo code
        setPromoCode(e.target.value);
    }
    // handle promo code 
    const handlePromoCode = () => {
        if (promoCode === promoCodeList[0]) {
            setTotalCost(totalRaw - 20);
            // set failed
            setFailedPromoAlert(false);
            // set succes
            setSuccessPromoAlert(true);
            setSuccessPromo(true);

        } else if (promoCode === promoCodeList[1]) {
            setTotalCost(totalRaw - 50);
            // set failed
            setFailedPromoAlert(false);
            // set succes
            setSuccessPromoAlert(true);
            setSuccessPromo(true);
        } else {
            // set success
            setSuccessPromoAlert(false);
            setSuccessPromo(false);
            // set failed
            setFailedPromoAlert(true);
            setTotalCost(totalRaw);
        }
    };







    return (
        <div className='flex-1/10 w-full h-full flex flex-col justify-start items-center px-8 bg-white shadow-xl'>
            <div className='flex-1 w-full h-full flex flex-row justify-between items-end pb-3 relative after:content-[""] after:w-full after:h-[1.5px] after:bg-slate-400 after:absolute after:bottom-0 after:left-0'>
                <h1 className='text-xl font-semibold capitalize'>order summary</h1>
            </div>
            <div className='flex-3 w-full h-full flex flex-col justify-start items-start pt-4 relative after:content-[""] after:absolute after:w-full after:h-[1.2px] after:bg-slate-400 after:bottom-0 after:left-0'>
                <h3 className='text-sm font-medium uppercase'>
                    items 3
                </h3>
                {/* card type */}
                <div className='w-full flex flex-col justify-start items-start gap-2 mt-10 relative'>
                    <h2 className='uppercase text-sm font-medium'>card type</h2>
                    <button ref={buttonModal} type='button' className='flex flex-row justify-between items-center w-full bg-slate-300 h-11 px-4 rounded-xs' onClick={handleShowCard}>
                        {
                            cardSelected === 'paypal' ?
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <FaPaypal className='text-2xl text-blue-500' />
                                    <p className='text-to-small text-slate-800 font-bold'>Paypal</p>
                                </div>
                                :
                                cardSelected === 'mastercard' ?
                                    <div className='flex flex-row justify-start items-center gap-2'>
                                        <RiMastercardFill className='text-4xl text-blue-500' />
                                        <p className='text-to-small text-slate-800 font-bold'>Mastercard</p>
                                    </div>
                                    :
                                    cardSelected === 'visa' ?
                                        <div className='flex flex-row justify-start items-center gap-2'>
                                            <RiVisaLine className='text-4xl text-blue-500' />
                                            <p className='text-to-small text-slate-800 font-bold'>Visa</p>
                                        </div>
                                        :
                                        <p className='text-to-small text-slate-500 font-semibold'>Choose your card</p>
                        }
                        <IoIosArrowDown className='text-lg text-black' />
                    </button>
                    {/* modal show card choose */}
                    <div ref={modalShowCard} className={`w-full bg-white absolute top-full shadow-lg z-2 flex flex-col jusstify-start items-start  ${showCard ? 'max-h-[8.5rem]' : 'max-h-0'} origin-top overflow-hidden transition-all duration-300 ease-in-out`}>
                        {/* paypal */}
                        <button type='button' onClick={() => handleSelectedCard('paypal')} className='w-full flex flex-row justify-between items-center py-2 px-4 hover:bg-slate-200'>
                            <FaPaypal className='text-2xl text-blue-500' />
                            <p className='text-sm font-semibold'>Paypal</p>
                        </button>
                        {/* mastercard */}
                        <button type='button' onClick={() => handleSelectedCard('mastercard')} className='w-full flex flex-row justify-between items-center py-2 px-4 hover:bg-slate-200'>
                            <RiMastercardFill className='text-3xl text-orange-400' />
                            <p className='text-sm font-semibold'>Mastercard</p>
                        </button>
                        <button type='button' onClick={() => handleSelectedCard('visa')} className='w-full flex flex-row justify-between items-center py-2 px-4 hover:bg-slate-200'>
                            <RiVisaLine className='text-3xl text-blue-500' />
                            <p className='text-sm font-semibold'>Visa</p>
                        </button>
                    </div>
                </div>
                {/* promo code */}
                <div className='w-full flex flex-col justify-start items-start gap-2 mt-7'>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <label htmlFor="promoCode" className='cursor-pointer text-sm font-medium uppercase'>promo code</label>
                        {
                            failedPromoAlert && <p className='text-to-small text-red-500 font-medium'>Promo Code is not valid</p>
                        }
                        {
                            successPromoAlert && <p className='text-to-small text-green-500 font-medium'>Promo Code is valid</p>
                        }
                    </div>
                    <div className='w-full flex flex-col justify-start items-start px-4  py-3 rounded-xs bg-slate-300'>
                        <input
                            id='promoCode'
                            maxLength={10}
                            type='text'
                            onChange={handleChangePromoCode}
                            value={promoCode}
                            placeholder='Enter your code'
                            className='w-full h-full text-sm border-none focus:outline-none font-semibold'
                        />
                    </div>
                    <button type='button' className='py-2 px-4 bg-primary-matcha uppercase text-xs mt-1 text-white font-semibold rounded-xs hover:bg-slate-300 hover:text-black transition-all duration-300 ease-in-out' onClick={handlePromoCode}>
                        apply
                    </button>
                </div>
            </div>
            {/* total cost  */}
            <TotalCost succesPromo={successPromo} totalCost={totalCost} totalRaw={totalRaw} />
        </div>
    )
}


type TotalCostProps = {
    succesPromo: boolean
    totalRaw?: number
    totalCost?: number
}

// total cost 
const TotalCost: FC<TotalCostProps> = ({ succesPromo, totalCost, totalRaw }) => {
    return (
        <div className='flex-1 w-full flex flex-col justify-start items-start gap-3 pt-2'>
            {/* total cost */}
            <div className='w-full flex flex-row justify-between items-center'>
                <p className='text-xs font-medium uppercase'>total cost</p>
                <div className='flex flex-row justify-start items-center gap-2'>
                    {
                        succesPromo && <p className='text-xs text-slate-600 font-bold uppercase line-through' style={{ textDecorationThickness: '2px' }}>
                            {formatUsd(totalRaw ?? 0)}
                        </p>
                    }

                    <p className='text-xs font-bold uppercase'>
                        {formatUsd(totalCost ?? 0)}
                    </p>
                </div>
            </div>
            {/* button checkout */}
            <button type='button' className='w-full py-2 px-4 bg-primary-matcha text-white text-sm font-semibold uppercase hover:bg-slate-300 hover:text-black transition-all duration-300 ease-in-out rounded-xs'>
                checkout
            </button>
        </div>
    )
}

export default Cart
