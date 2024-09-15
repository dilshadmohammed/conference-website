import ImportantDates from "../components/ImportantDates"

function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center md:justify-center bg-gray-100 py-4 md:px-16 h-fit">
        <h2 className="text-lg md:text-xl font-semibold text-center text-gray-600 mt-16">
          NSS College of Engineering
        </h2>
        <h2 className="text-lg md:text-xl text-center text-gray-600 mb-4">
          Department of Computer Science and Engineering
        </h2>
        <h1 className="text-3xl md:text-6xl text-center font-bold text-gray-800 mb-4 py-4 px-4 md:px-10">
          International Conference on <br/> Next Generation Information<br/> Systems and Technologies (NGIST) 2025
        </h1>
        <h2 className="text-lg md:text-2xl text-center text-gray-600">
          April 29-30, 2025
        </h2>
        <img src="/udhe.png" alt="udhe" />
        
        <div className="w-full h-fit mt-28 mb-8">
          <h1 className="text-3xl text-center font-semibold p-2">Important Dates</h1>
          <ImportantDates/>
        </div>
      </main>

    </>
  )
}

export default Home