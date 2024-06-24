// import React from "react";
// import style from "./Offers.module.css";
// import { Box, Container } from "@mui/material";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import rupeeOffer from "../../assets/offers/rupeesOff.png";
// import percentOffer from "../../assets/offers/percentOff.png";

// export default function Offers() {
//   return (
//     <Box py={6}>
//       <Container maxWidth="xl">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           modules={[Pagination]}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             767: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           <SwiperSlide>
//             <Box component={"img"} src={rupeeOffer} />
//           </SwiperSlide>

//           <SwiperSlide>
//             <Box component={"img"} src={percentOffer} />
//           </SwiperSlide>

//           <SwiperSlide>
//             <Box component={"img"} src={rupeeOffer} />
//           </SwiperSlide>

//           <SwiperSlide>
//             <Box component={"img"} src={percentOffer} />
//           </SwiperSlide>

//           <SwiperSlide>
//             <Box component={"img"} src={rupeeOffer} />
//           </SwiperSlide>

//           <SwiperSlide>
//             <Box component={"img"} src={percentOffer} />
//           </SwiperSlide>
//         </Swiper>
//       </Container>
//     </Box>
//   );
// }

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import style from "./Offers.module.css";

// import required modules
import { Pagination } from "swiper/modules";
import { ReactComponent as RupeeOffer } from "../../assets/offers/rupeesOff.svg";
import { ReactComponent as PercentOffer } from "../../assets/offers/percentOff.svg";

export default function App() {
  return (
    <div className={style.offers}>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={0}
      >
        <SwiperSlide className="swiperSlide">
          <RupeeOffer />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <PercentOffer />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <RupeeOffer />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <PercentOffer />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <RupeeOffer />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <PercentOffer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
