import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        
    },
    reducers:{
        add: (state,action) =>  {
            state.items.push(action.payload)

            //logic 2:
        //     state.items.push({
        //         id:action.payload._id,
        //         name:action.payload.name,
        //         qty:action.payload.
          },

        remove: (state, action) => {
            //logic 1:-
            state.items = state.items.filter((item) => item._id !== action.payload._id);


            //logic 2:-
            // let idx = state.items.findIndex(item => item._id === action.payload);
            // console.log(idx);
            // state.items = state.items.slice(0, idx).concat(state.items.slice(idx + 1));
            // console.log(state.items);
            // console.log(action.payload);
        },

        reset: (state) => {
            state.items = [];
        }
    }
    
})

export const {add, remove, reset} = cartSlice.actions;
export default cartSlice.reducer;