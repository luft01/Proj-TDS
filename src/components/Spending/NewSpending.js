import React, { useState } from "react";
import './NewSpending.css';
import SpendingForm from "./SpendingForm";
function NewSpending(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEdigintHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new Item</button>}
            {isEditing &&
                <SpendingForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEdigintHandler
                    }
                />
            }
        </div>
    )
}

export default NewSpending;