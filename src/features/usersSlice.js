import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();

  return data;
});

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearExistingUsers(state) {
      state.users = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.push(...action.payload);
    });
  },
});

export const usersReducer = usersSlice.reducer;

export const { clearExistingUsers } = usersSlice.actions;

export const getUsers = (state) => state.users.users;
