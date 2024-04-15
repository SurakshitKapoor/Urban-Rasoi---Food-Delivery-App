
import { createSlice } from '@reduxjs/toolkit'

export const isLoggedInSlice = createSlice({
    name:"isLoggedIn",
    initialState:{
        isLoggedIn:false
    },
    reducers:{
        changeLoggedIn: (state) => {
            if(state.value) {
                state.value = false;
            }
            else{
                state.value = true;
            }
        }
    }
});

export const {changeLoggedIn} = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
