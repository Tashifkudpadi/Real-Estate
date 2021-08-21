import React from "react";
import { Button } from "../Navbar/Button";
import classes from "./Interior.module.css";

const Interior = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          <h1>{props.data.heading}</h1>
          <p>{props.data.para}</p>
          <Button className={classes.btn}>{props.data.buttonLabel}</Button>
        </div>
        <div className={classes.right}>
          <img src={props.data.image} alt="homes" />
        </div>
      </div>
    </section>
  );
};

export default Interior;
