import { type FC } from 'react'

type Props = {
    type: 'text' | 'password' | 'email';
    placeholder: string;
    value: string;
    setValue: (value: string) => void
    maxLenght?: number
    name: string
}

const Input: FC<Props> = ({ type, placeholder, value, setValue, maxLenght, name }) => {
    return (
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            maxLength={maxLenght}
            onChange={(e) => setValue(e.target.value)}
            className='w-full h-full px-4 text-xs text-slate-700 placeholder:text-slate-400 placeholder:text-xs focus:outline-none'
        />
    )
}

export default Input
