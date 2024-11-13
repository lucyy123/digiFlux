import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PageState = {
  pageNumber: number;
}

const initialState: PageState = {
  pageNumber: 5, 
};

export const pageSlice = createSlice({
  name: 'page', 
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

// Export the action and the reducer
export const { setPageNumber } = pageSlice.actions;
