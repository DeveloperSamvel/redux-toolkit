import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogged: !!localStorage.getItem('userId'),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signInUser(state, { payload }) {
            localStorage.setItem('userId', payload.userId);
            state.isLogged = !!localStorage.getItem('userId');
        },
        logOutUser: (state) => {
            localStorage.removeItem('userId');
            state.isLogged = false;
        },
    },
});

const { actions, reducer } = authSlice;
export const { signInUser, logOutUser } = actions;
export default reducer;