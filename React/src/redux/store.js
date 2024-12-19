import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from '../components/expenses/expenseSlice'
import userReduser from '../components/user/createuserSlice'
export default configureStore({
  reducer: {
    expense: expenseReducer,
    user:userReduser,
  },
})