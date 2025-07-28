import { useState, type FC } from 'react'
import Label from '../../components/Label'
import Input from '../../components/Input'

// icons 
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";


type Props = {
    type: 'text' | 'password' | 'email';
    name: string;
    label: string;
    value: string;
    setValue: (value: string) => void
    maxLenght?: number
}

const InputLoginRegister: FC<Props> = ({ type, name, label, value, setValue, maxLenght }) => {
    // state eye 
    const [eye, setEye] = useState<boolean>(false)

    // handle eye 
    const handleEye = (value: boolean) => setEye(value)

    return (
        <div className='w-full flex flex-col justify-start items-start gap-2'>
            <Label htmlfor={name} text={label} />
            <div className={`w-full bg-slate-200 rounded-full py-2.5 px-1.5 flex flex-row justify-between items-center ${type === 'password' ? 'pr-5' : ''}`}>

                {/* eye */}
                {
                    type === 'password' ? eye ? (
                        <>
                            <Input type={'text'} placeholder={label} value={value} setValue={setValue} maxLenght={maxLenght} name={name} />
                            <button type='button' onClick={() => handleEye(false)}>
                                <VscEye className='text-xl text-slate-600' />
                            </button>
                        </>
                    ) : (
                        <>
                            <Input type={'password'} placeholder={label} value={value} setValue={setValue} maxLenght={maxLenght} name={name} />
                            <button type='button' onClick={() => handleEye(true)}>
                                <VscEyeClosed className='text-xl text-slate-600' />
                            </button>
                        </>
                    ) : (
                        <Input type={type} placeholder={label} value={value} setValue={setValue} maxLenght={maxLenght} name={name} />
                    )

                }
            </div>
        </div>
    )
}

export default InputLoginRegister
