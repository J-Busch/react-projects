import React, {useState} from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function ExpenseItemsList(props) {

    const [year, setYear] = useState('2021');

    const yearEnteredHandler = (event) => {
        setYear(event.target.value);
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });

    // let expensesContent = <p>No expenses found.</p>
    // if (props.expenses.length > 0) {
    //     expensesContent = props.expenses.map((expense) => (
    //         <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    //     ));
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={year} onYearEntered={yearEnteredHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    ))
                } */}
                {/* {filteredExpenses.length === 0 ? (
                    <p>No expenses found.</p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    ))
                )} */}
            </Card>
        </div>
    );
}

export default ExpenseItemsList;