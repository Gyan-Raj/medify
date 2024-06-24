import React from "react";
import style from "./Faq.module.css";
import { ReactComponent as Image } from "../../assets/faq/image.svg";
import { ReactComponent as Heart } from "../../assets/faq/heart.svg";
import { ReactComponent as Emoji } from "../../assets/faq/emoji.svg";
import { ReactComponent as Plus } from "../../assets/faq/plus.svg";

const Faq = () => {
  return (
    <div className={style.faq}>
      <p className={style.headOne}>Get Your Answer</p>
      <p className={style.headTwo}>Frequently Asked Questions</p>
      <div className={style.wrapper}>
        <div className={style.leftWrapper}>
          <div className={style.image}>
            <Image />
          </div>
          <div className={style.heart}>
            <Heart />
          </div>
          <div className={style.reaction}>
            <Emoji />
            <div className={style.text}>
              <p>84k+</p>
              <p>Happy Patients</p>
            </div>
          </div>
        </div>
        <div className={style.rightWrapper}>
          <div className={style.line}>
            <p>Why choose our medical for your family?</p>
            <Plus />
          </div>
          <div className={style.line}>
            <p>Why we are different from others?</p>
            <Plus />
          </div>
          <div className={style.line}>
            <p>Trusted & experience senior care & love</p>
            <Plus />
          </div>
          <div className={style.line}>
            <p>How to get appointment for emergency</p>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
