import React from "react";
import Hoarding from "../../hoarding/Hoarding";
import Search from "../../search/Search";
import style from "./Home.module.css";
import Offers from "../../offers/Offers";
import FindBySpecialization from "../../findBySpecialization/FindBySpecialization";
import Specialists from "../../specialists/Specialists";
import FreeConsultation from "../../freeConsultation/FreeConsultation";
import LatestNews from "../../latestNews/LatestNews";
import OurFamilies from "../../ourFamilies/OurFamilies";
import Faq from "../../faq/Faq";
import DownloadApp from "../../downloadApp/DownloadApp";
import Footer from "../../footer/Footer";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [stateData, setStateData] = useOutletContext();
  return (
    <div className={style.home}>
      <div className={style.hoarding}>
        <Hoarding />
      </div>
      <div className={style.content}>
        <div className={style.search}>
          <Search
            home={true}
            stateData={stateData}
            setStateData={setStateData}
          />
        </div>
        <div className={style.offers}>
          <Offers />
        </div>
        <div className={style.findBySpecialization}>
          <FindBySpecialization />
        </div>
        <div className={style.specialist}>
          <Specialists />
        </div>
        <div className={style.freeConsultation}>
          <FreeConsultation />
        </div>
        <div className={style.latestNews}>
          <LatestNews />
        </div>
        <div className={style.ourFamilies}>
          <OurFamilies />
        </div>
        <div className={style.faq}>
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Home;
