import Cards from "./Cards";
import user1 from "../assets/clientPhotos/1.jpg";
import user2 from "../assets/clientPhotos/2.jpg";
import user3 from "../assets/clientPhotos/3.jpg";
import user4 from "../assets/clientPhotos/4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const CardsSwiper = () => {
  return (
    <>
      {/* text section */}
      <div className="w-full flex flex-col overflow-hidden max-lg:overflow-hidden  items-center justify-center mt-[100px] gap-5 ">
        <h3 className="text-xl text-orange-600  font-semibold uppercase max-sm:text-[20px]">
          OUR TESTIMONIALS
        </h3>
        <p className="text-3xl text-gray-900 font-semibold  text-center max-sm:text-[25px]  ">
          What Our Students Say About Us
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <Swiper
          speed={1000}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // Breakpoints for responsive design
            0: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 3, // 3 slides on large screens
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-[75%] mb-[220px] "
        >
          {/* Remove the grid layout and keep only SwiperSlide components */}
          <SwiperSlide className="flex  justify-center">
            <Cards name={"Krestin"} image={user1} />
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center">
            <Cards name={"Lara"} image={user2} />
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center">
            <Cards name={"Clara"} image={user3} />
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center">
            <Cards name={"Jasmin"} image={user4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CardsSwiper;
