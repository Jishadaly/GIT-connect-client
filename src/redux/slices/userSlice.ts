import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserGitData } from '../../types/index';



const initialState: {
    currentUser: UserGitData | null, isLoading: boolean,
    error: string | null
} = {
    currentUser: null,
    isLoading: false,
    error: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserGitData | null>) => {
            console.log(action.payload,"paylaod")
            state.currentUser = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
            state.isLoading = false;
            state.error = null;
        }
    }
});


export const {
    setCurrentUser,
    setLoading,
    setError,
    clearCurrentUser
} = userSlice.actions;

export default userSlice.reducer;