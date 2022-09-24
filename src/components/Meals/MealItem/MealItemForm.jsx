import Input from "../../UI/Input";
import classes from './MealItemForm.module.css';
const abc ={
    id: 'amount_' + props.id,
    text: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1'
}

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={abc} />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm