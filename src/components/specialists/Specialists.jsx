import React from "react";
import style from "./Specialists.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { ReactComponent as Hull } from "../../assets/specialists/hull.svg";
import { ReactComponent as Khan } from "../../assets/specialists/khan.svg";
import { ReactComponent as Sachdeva } from "../../assets/specialists/sachdeva.svg";
import { ReactComponent as Sharma } from "../../assets/specialists/sharma.svg";
import { ReactComponent as Dr } from "../../assets/specialists/dr.svg";

const Specialists = () => {
  return (
    <div className={style.specialists}>
      <p>Our Medical Specialist</p>
      <div className={style.swiper}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className={style.swiperSlideSpecialist}>
            <Hull />
            <Khan />
            <Sachdeva />
            <Sharma />
            <Dr />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Hull />
            <Khan />
            <Sachdeva />
            <Sharma />
            <Dr />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Hull />
            <Khan />
            <Sachdeva />
            <Sharma />
            <Dr />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Specialists;
