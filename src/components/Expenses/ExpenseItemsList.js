import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI//Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpenseItemsList.css';

function ExpenseItemsList(props) {

    const [year, setYear] = useState('2021');

    const yearEnteredHandler = (event) => {
        setYear(event.target.value);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={year} onYearEntered={yearEnteredHandler} />
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
            </Card>
        </div>
    );
}

export default ExpenseItemsList;