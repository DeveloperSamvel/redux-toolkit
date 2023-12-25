import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogged: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser: (state) => {
            state.isLogged = true;
        },
        logOutUser: (state) => {
            state.isLogged = false;
        },
    },
})

const { actions, reducer } = authSlice;
export const { signInUser, logOutUser } = actions;
export default reducer;