import { createSlice } from "@reduxjs/toolkit";

const SignupSlice = createSlice({
    name: "SignUp",
    initialState:{
        user: "SignUp Successfully",
    },
    reducers:{
        add(state, action){
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        del(){},
    },
})

export const {add,del} = SignupSlice.actions
export default SignupSlice.reducer; 