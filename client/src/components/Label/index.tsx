import { type FC } from 'react'


type Props = {
    htmlfor: string;
    text: string
}
const Label: FC<Props> = ({ htmlfor, text }) => {
    return (
        <label htmlFor={htmlfor} className='text-sm font-semibold text-black capitalize'>{text}</label>
    )
}

export default Label
