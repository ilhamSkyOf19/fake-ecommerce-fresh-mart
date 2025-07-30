import { useMemo, type FC } from "react"
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



    // useEffect(() => {
    //     if (products !== null) {
    //         console.log(products);
    //     }
    // }, [products])



    // Memoize each section
    // thumb
    const sectionThumbnail = useMemo(() => <SectionThumbnail />, []);
    // section two
    const sectionTwo = useMemo(() => <SectionTwo />, []);
    // featured products
    const sectionFeaturedProducts = useMemo(() => <SectionFeaturedProducts />, []);
    // other sections
    const sectionPromo = useMemo(() => <SectionPromo />, []);
    // info
    const sectionInfo = useMemo(() => <SectionInfo />, []);
    // highlight products
    const sectionHightlightProducts = useMemo(() => <SectionHightlightProducts />, []);
    // news
    const sectionNews = useMemo(() => <SectionNews />, []);
    // footer
    const footer = useMemo(() => <Footer />, []);



    return (
        <LayoutPage>
            {sectionThumbnail}
            {sectionTwo}
            {sectionFeaturedProducts}
            {sectionPromo}
            {sectionInfo}
            {sectionHightlightProducts}
            {sectionNews}
            {footer}
        </LayoutPage>

    )
}

export default Home
