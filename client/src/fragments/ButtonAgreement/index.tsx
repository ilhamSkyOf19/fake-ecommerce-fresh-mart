import { type FC } from 'react'
import { FaCheck } from 'react-icons/fa'

type Props = {
    value: boolean;
    setValue: (value: boolean) => void
}

const ButtonAgreement: FC<Props> = ({ value, setValue }) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            {/* checkbox tersembunyi */}
            <input
                type="checkbox"
                className="peer hidden"
                checked={value}
                onChange={(e) => setValue(e.target.checked)}
                readOnly
            />

            {/* custom kotak checkbox */}
            <div className="w-4 h-4 border border-slate-400 rounded-sm 
                  peer-checked:bg-primary-matcha transition-all duration-100 flex justify-center items-center">
                <FaCheck className='text-white text-to-small' />
            </div>

            {/* teks */}
            <p className="text-xs text-slate-700">Agree to terms and conditions</p>
        </label>
    )
}

export default ButtonAgreement
