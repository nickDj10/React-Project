import { Fragment } from "react";
import classes from "./Header.module.css";
import imageSrc from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onClick={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imageSrc} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
