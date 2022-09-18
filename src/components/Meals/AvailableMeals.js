import DUMMY_MEALS from "./DummyMeals";
import Card from "../UI/Card";
import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem 
        id={meal.id}
        key={meal.key}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />
    ));

    return(
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
            
        </section>
    )

}

export default AvailableMeals;