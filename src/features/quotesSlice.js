import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("quotes/fetchQuotes", async () => {
  try {
    const response = await fetch("http://quotable.io/random");
    const data = response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  quotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.quotes.push(action.payload);
    });
  },
});

export const quotesReducer = quotesSlice.reducer;

export const getQuotes = (state) => state.quotes.quotes;
