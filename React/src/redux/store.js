import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from '../components/expenses/expenseSlice'
export default configureStore({
  reducer: {
    expense: expenseReducer,
  },
})