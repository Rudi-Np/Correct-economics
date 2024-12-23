import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adduser, deleteuser,finduser} from './createuserApi';

export const addUser = createAsyncThunk("addUser", async (user, thunkAPI) => {
    const response = await adduser(user);
    return response;  
});

export const deleteUser = createAsyncThunk("deleteUser", async (userId, thunkAPI) => {
  console.log({userId});
  const response = await deleteuser(userId);
  return response;  
});


export const findUser = createAsyncThunk("findUser", async (user, thunkAPI) => { // Accept user object
  const response = await finduser(user); // Call the correct function
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
