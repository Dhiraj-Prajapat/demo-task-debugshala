import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div className="flex justify-center px-4 md:px-8">
        <div className="main h-screen w-full max-w-7xl">
          <div className="head py-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-plex">
              Explore our Courses
            </h2>
          </div>
          <div className="border-b-2 border-gray-400 mb-4"></div>
          <h2 className="ml-4 md:ml-10 my-6 text-xl md:text-2xl font-semibold">AI & Data Science</h2>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default App;
