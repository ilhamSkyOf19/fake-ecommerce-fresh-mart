import type { FC } from "react"
import Navbar from "../../fragments/Navbar/index."

const Home: FC = () => {
    return (
        <div className="w-screen min-h-[100vh] overflow-hidden bg-[#f4f6f0]">
            <Navbar />
        </div>
    )
}

export default Home
