import type { FC } from "react"
import SectionThumbnail from "./SectionThumbnail"
import SectionTwo from "./SectionStoriesCategory"
import SectionInfo from "./SectionInfo"
import SectionFeaturedProducts from "./SectionFeaturedProducts"
import SectionPromo from "./SectionPromo"
import SectionHightlightProducts from "./SectionHightlightProducts"
import SectionNews from "./SectionNews"
import Footer from "./Footer"
import LayoutPage from "../../Layouts/LayoutPage"

const Home: FC = () => {

    return (
        <LayoutPage>
            {/* section thumbnail */}
            <SectionThumbnail />
            {/* section two */}
            <SectionTwo />
            {/* section featured products */}
            <SectionFeaturedProducts />
            {/* section promo */}
            <SectionPromo />
            {/* section info */}
            <SectionInfo />
            {/* section hightlight */}
            <SectionHightlightProducts />
            {/* section news */}
            <SectionNews />
            {/* footer */}
            <Footer />
        </LayoutPage>

    )
}

export default Home
