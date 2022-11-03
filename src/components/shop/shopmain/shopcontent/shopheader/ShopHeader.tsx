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
import { shopCarouselData } from "../../../../../utils/homeData";
import classNames from "classnames";
import { themes } from "../../../../../styles/themes/theme";
const ShopHeader = () => {
  const { imageLayout } = themes;
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
        {[...shopCarouselData]
          .sort((a, b) => a.image.localeCompare(b.image))
          .map(({ id, image, link }) => (
            <SwiperSlide key={id}>
              <div className={classNames(`w-full max-w-full h-48`)}>
                <img
                  src={image}
                  alt=""
                  title=""
                  className={classNames(`${imageLayout} rounded-md`)}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ShopHeader;
