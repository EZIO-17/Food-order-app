import { Fragment } from "react";
import mealsImg from '../../assets/meals.jpg';

const Header = (props) => {
    return(
        <Fragment>
            <header>
                <h1>Indus Foods</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImg} alt='Header Image' />
            </div>
        </Fragment>
    )
}