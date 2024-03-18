import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({handleEdit, initialExpenses, handleDelete}) => {

  return (
    <>
        <ul>
            {
                initialExpenses.map(expense => {
                    return (
                        <ExpenseItem
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        expense={expense} 
                        key={expense.id} 
                        />
                    )
                })
            }
            
            

        </ul>
        <button>
            목록 지우기
        </button>
    </>
  )
}

export default ExpenseList