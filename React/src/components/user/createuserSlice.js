import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adduser } from './createuserApi';

export const addUser = createAsyncThunk("addUser", async (user, thunkAPI) => {
    const response = await adduser(user);
    return response;  
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    phone: null,
    email: null,
    password: null,
  },
  reducers: {
    setUser: (state, action) => {
        state.name = action.payload.name;
        state.phone = action.payload.phone;
        state.email = action.payload.email;
        state.password = action.payload.password;
    },
  }
});

// Export actions and reducer
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
