import React from "react";
import { Button } from "../Navbar/Button";
import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          <h1>
            Let's find <br />
            your Dream Home
          </h1>
          <div className={classes.social}>
            <span>
              <a href="https://www.telegram.com/tashif kudpadi" target="_blank">
                <i class="fab fa-telegram-plane"></i>
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/itz_tshif" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/profile.php?id=100010955229556"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/tashif-kudpadi-b4464b1b9/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.right}>
          <span>
            <h4>Contact Us</h4>
            <h4>Offices</h4>
            <h4>FAQ</h4>
            <h4>Support</h4>
            <h4>Questions</h4>
            <h4>Europe</h4>
            <h4>United States</h4>
            <h4>India</h4>
            <Button className={classes.btn}>Let's Chat</Button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
