import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, task: "javascript", finished: true },
  { id: 2, task: "typescript", finished: false },
  { id: 3, task: "reactjs", finished: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (task) => {
        return {
          payload: {
            id: nanoid(),
            task,
            finished: true,
          },
        };
      },
    },
  },
});

export default todosSlice.reducer;

export const { addTodos } = todosSlice.actions;
