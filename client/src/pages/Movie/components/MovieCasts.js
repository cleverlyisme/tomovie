import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaUserFriends } from "react-icons/fa";

import Titles from "../../../components/Titles";

const MovieCasts = ({ casts }) => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <div className="my-12">
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          breakpoints={breakpoints}
        >
          {casts.map((cast, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-main border border-gray-800">
                <img
                  src={cast?.image}
                  alt={cast?.name}
                  className="w-full h-64 object-cover rounded mb-2"
                />
                <p>{cast?.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;
