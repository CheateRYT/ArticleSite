import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
  },
  reducers: {
    // addArticles(state, action) {
    //   state.articles.push({
    //     id: new Date().toISOString(),
    //     text: action.payload.text,
    //     completed: false,
    //   });
    // },
  },
});

//export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default articleSlice.reducer;
