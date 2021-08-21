import React from "react";
import { Button } from "./Button";
// import classes from "./NavbarButton.module.css";

const NavbarButton = (props) => {
  return (
    <div>
      <Button primary="true" onClick={props.onClick}>
        Contact Us
      </Button>
    </div>
  );
};

export default NavbarButton;
