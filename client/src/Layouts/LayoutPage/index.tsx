import { type FC } from 'react'
import Navbar from '../../fragments/Navbar/index.'

type Props = {
    children: React.ReactNode;
}

const LayoutPage: FC<Props> = ({ children }) => {
    return (
        <div className="w-full min-h-[100vh] overflow-hidden bg-[#f4f6f0]">
            {/* navbar */}
            <Navbar />
            {children}
        </div>
    )
}

export default LayoutPage
