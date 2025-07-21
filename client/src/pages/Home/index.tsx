import type { FC } from "react"
import Navbar from "../../fragments/Navbar/index."
import SectionThumbnail from "./SectionThumbnail"
import SectionTwo from "./SectionStoriesCategory"
import SectionInfo from "./SectionInfo"

const Home: FC = () => {

    return (
        <div className="w-full min-h-[100vh] overflow-hidden bg-[#f4f6f0]">
            <Navbar />
            {/* section thumbnail */}
            <SectionThumbnail />
            {/* section two */}
            <SectionTwo />
            {/* section info */}
            <SectionInfo />
        </div>
    )
}

export default Home
