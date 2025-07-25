import { type FC } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

type Props = {
    link: string
}

const ButtonMore: FC<Props> = ({ link }) => {
    return (
        <Link to={link} className="flex flex-row justify-center items-center gap-2 py-2 px-4 bg-primary-matcha rounded-full hover:scale-110 transition-transform duration-300 ease-in-out">
            <p className="text-xs font-semibold text-white">More</p>
            <FaArrowRightLong className="text-sm text-white" />
        </Link>
    )
}

export default ButtonMore
