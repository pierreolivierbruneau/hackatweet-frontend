import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const userSlice = createSlice({
	name: 'tweet',
	initialState,
	reducers: {
		addtweetToStore: (state, action) => {
			state.value.push(action.payload)
				// state.value.tweetname = action.payload.tweetname;
				// state.value.username = action.payload.username;
			}
		},

});

export const { addtweetToStore } = userSlice.actions;
export default userSlice.reducer;