import type { FC } from "react"
import Navbar from "../../fragments/Navbar/index."
import SectionThumbnail from "./SectionThumbnail"
import SectionTwo from "./SectionStoriesCategory"

const Home: FC = () => {

    return (
        <div className="w-full min-h-[100vh] overflow-hidden bg-[#f4f6f0]">
            <Navbar />
            {/* section thumbnail */}
            <SectionThumbnail />
            {/* section two */}
            <SectionTwo />
        </div>
    )
}

export default Home
