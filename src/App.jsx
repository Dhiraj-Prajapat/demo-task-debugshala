import Slider from "./components/Slider";
import UpSkillslider from "./components/UpSkillSlider";
import WebdevSlider from "./components/WebdevSlider";
import WorkshopSlider from "./components/WorkshopSlider";

function App() {
  return (
    <>
      <div className="flex justify-center px-4 md:px-8">
        <div className="main h-full w-full max-w-7xl">
          <div className="head pt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-plex">
              Explore our Courses
            </h2>
          </div>
          <div className="border-b-2 border-gray-400 my-10"></div>
          <h2 className="ml-4 md:ml-10 my-6 text-xl md:text-2xl font-semibold">AI & Data Science</h2>
          <Slider />

          <div className="border-b-2 border-gray-400 my-10"></div>
          <h2 className="ml-4 md:ml-10 my-6 text-xl md:text-2xl font-semibold">Web Development</h2>
          <WebdevSlider />

          <div className="border-b-2 border-gray-400 my-10"></div>
          <h2 className="ml-4 md:ml-10 my-6 text-xl md:text-2xl font-semibold">Up Skill Courses</h2>
          <UpSkillslider />

          <div className="border-b-2 border-gray-400 my-10"></div>
          <h2 className="ml-4 md:ml-10 my-6 text-xl md:text-2xl font-semibold">Workshops & Seminars</h2>
          <WorkshopSlider />
        </div>
      </div>
    </>
  );
}

export default App;
