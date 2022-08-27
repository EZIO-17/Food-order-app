import DUMMY_MEALS from "./DummyMeals";
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return(
        <div className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </div>
    )

}

export default AvailableMeals;