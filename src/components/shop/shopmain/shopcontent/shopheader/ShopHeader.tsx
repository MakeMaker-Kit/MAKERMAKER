import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";
const ShopHeader = () => {
  return (
    <>
      <Swiper
        direction="horizontal"
        speed={3000}
        loop
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        centeredSlides={false}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[
          Keyboard,
          Scrollbar,
          Navigation,
          Pagination,
          Autoplay,
          Mousewheel,
        ]}
        className="mySwiper"
      >
        <SwiperSlide> slider 1 </SwiperSlide>
        <SwiperSlide> slider 1 </SwiperSlide>
        <SwiperSlide> slider 1 </SwiperSlide>
        <SwiperSlide> slider 1 </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ShopHeader;
