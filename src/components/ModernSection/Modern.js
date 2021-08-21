import React from "react";
import { Button } from "../Navbar/Button";
import classes from "./Modern.module.css";

const Modern = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          <img src={props.data.image} alt="homes" />
        </div>
        <div className={classes.right}>
          <h1>{props.data.heading}</h1>
          <p>{props.data.para}</p>
          <p className={classes.p1}>{props.data.para2}</p>
          <button className={classes.press}>{props.data.buttonLabel}</button>
        </div>
      </div>
    </section>
  );
};

export default Modern;
