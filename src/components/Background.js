import React from "react";
import classes from "./Background.module.css";
import bgImg from "../images/bg.jpg";

const Background = () => {
  return (
    <div className={classes.bg}>
      <img src={bgImg} alt="" />
    </div>
  );
};

export default Background;
