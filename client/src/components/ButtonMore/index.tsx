import { type FC } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

type Props = {
    link: string
}

const ButtonMore: FC<Props> = ({ link }) => {
    return (
        <Link to={link} className="flex flex-row justify-center items-center gap-2 h-8.5 w-24 bg-primary-matcha rounded-full hover:opacity-80 transition-opacity duration-300 ease-in-out origin-center">
            <p className="text-xs font-semibold text-white">More</p>
            <FaArrowRightLong className="text-sm text-white" />
        </Link>
    )
}

export default ButtonMore
