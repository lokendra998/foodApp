import { Fragment } from "react/cjs/react.production.min";
import mealsImage from "./meals.jpg"
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Food-King@Meals</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delisious food!" />
        </div>
    </Fragment>
};
export default Header;