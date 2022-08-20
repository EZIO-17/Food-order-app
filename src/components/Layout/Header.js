import { Fragment } from "react";
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';


const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Indus Foods</h1>
                <button>Cart</button>
            </header>
            <div className={classes.main_image}>
                <img src={mealsImg}  />
            </div>
        </Fragment>
    )
}

export default Header;