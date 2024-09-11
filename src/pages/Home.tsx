import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col items-center justify-center bg-gray-100 p-4 h-[615px]">
        <h2 className="text-xl text-gray-600">NSS College of Engineering</h2>
        <h2 className="text-xl text-gray-600 mb-4">
          Department of Computer Science and Engineering
        </h2>
        <h1 className="text-3xl md:text-6xl text-center font-bold text-gray-800 mb-4 py-4 px-10">
          International Conference on <br/> Next Generation Information<br/> Systems and Technologies (NGIST) 2025
        </h1>
        <h2 className="text-lg md:text-2xl text-center text-gray-600">
          April 29-30, 2025
        </h2>
        <img src="src/assets/udhe.png" alt="" />
      </main>

    </>
  )
}

export default Home