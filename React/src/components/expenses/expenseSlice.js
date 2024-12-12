import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addexpense } from './expenseApi';

export const addExpense = createAsyncThunk("addExpense", async (expense, thunkAPI) => {
    const response = await addexpense(expense);
    console.log({ response });
    return response;  
});

export const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    id: null,
    amount: 0,
    date: null,
    type: null,
    category: null,
    paymentMethod: null,
  },
  reducers: {
    // You may want to adjust this reducer based on how you want to store the expense data
    setExpense: (state, action) => {
        state.type = action.payload.type;
        state.amount = action.payload.amount;
        state.date = action.payload.date;
        state.category = action.payload.category;
        state.paymentMethod = action.payload.paymentMethod;
    },
  }
});

// Export actions and reducer
export const { setExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
