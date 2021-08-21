import React from "react";
import { Button } from "../Navbar/Button";
import classes from "./International.module.css";

const Article = (props) => {
  return (
    <>
      <div className={classes.heading}>
        <h2>{props.data.heading}</h2>
      </div>

      <section className={classes.container}>
        <div className={classes.content}>
          <div className={classes.left}>
            <img src={props.data.image} alt="homes" />
            <p>{props.data.paraOne}</p>
            <Button className={classes.btn}>
              {props.data.buttonLabel}
              <span>
                <i class="fas fa-arrow-right"></i>
              </span>
            </Button>
          </div>
          <div className={classes.right}>
            <img src={props.data.image2} alt="homes" />
            <p>{props.data.paraTwo}</p>
            <Button className={classes.btn}>
              {props.data.buttonLabel}
              <span>
                <i class="fas fa-arrow-right"></i>
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
