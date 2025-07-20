import type { FC } from "react"
import Navbar from "../../fragments/Navbar/index."
import SectionThumbnail from "./SectionThumbnail"

const Home: FC = () => {

    return (
        <div className="w-full min-h-[100vh] overflow-hidden bg-[#f4f6f0]">
            <Navbar />
            {/* section thumbnail */}
            <SectionThumbnail />
        </div>
    )
}

export default Home
