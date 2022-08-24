import { createSlice } from "@reduxjs/toolkit";


export const balanceSlice = createSlice({
    name: "balanceR",

    initialState: {
        balance: 0
    },
    reducers: {
        addToBalance: (state,action) => {
            state.balance += action.payload;
        }
    }
});             
// console.log("Balance slice:"+balanceSlice)
export const { addToBalance } = balanceSlice.actions;
export default balanceSlice.reducer;