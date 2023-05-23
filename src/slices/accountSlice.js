import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  amount: 0,
}

export const fetchUserById = createAsyncThunk(
  'account/getUser',
  async (id, thunkAPI) => {
    const {data} =  await axios.get(`http://localhost:8080/account/${id}`)
    return data.amount
  }
)

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchUserById.fulfilled,(state,action)=>{
      state.amount = action.payload;
      state.pending = false;
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer