import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { webDev} from "../cardData";

const WebdevSlider = () => {
  
  return (
    <div className="w-full max-md mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {webDev.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative justify-center items-center border border-gray-300 text-center text-xl min-h-[100px] rounded-xl hover:cursor-pointer `}
            >
              <div
                className={`absolute z-10 top-0 right-0 py-2 px-4 text-white rounded-tr-xl rounded-bl-xl ${card.gradientClass}`}
              >
                bestseller
              </div>
              <img
                src={card.imgUrl}
                alt=""
                className="rounded-t-xl w-full object-cover"
              />
              <h3 className="bg-black text-white p-2 mb-2">{card.title}</h3>
              <p className="text-sm text-left p-3">{card.description}</p>
              <p className="text-sm text-left p-3">{card.assistance}</p>
              <div className="flex flex-col md:flex-row justify-between p-2">
                <button className="p-2 rounded-md border border-gray-300 mb-2 md:mb-0">
                  Course Details
                </button>
                <button className="p-2 px-10 rounded-md border border-gray-300 bg-gradient-to-r from-black to-blue-700 text-white font-semibold">
                  Syllabus
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
        
    </div>
  );
};

export default WebdevSlider;
