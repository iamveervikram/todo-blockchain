import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "tds",

  initialState: {
    todos: [],
    changed: false,
    newData: [],
    deleteData: [],
    updateData: [],
    removeList: [],
    newListId: [],
  },

  reducers: {
    replaceData(state, action) {
      state.todos = action.payload.todos;
    },
    addTodo(state, action) {
      const newTodo = action.payload;
      state.changed = true;
      state.newData = [];

      state.newData.push({
        listId: newTodo.listId,
        title: newTodo.title,
        description: newTodo.description,
      });
    },
    addList(state, action) {
      state.changed = true;
      const newList = action.payload;
      state.newListId = [];
      state.newListId.push({ listId: newList.listId });
    },
    deleteTodo(state, action) {
      const newDeleteTodo = action.payload;
      state.changed = true;
      state.deleteData = [];

      state.deleteData.push({
        listId: newDeleteTodo.listId,
        todoId: newDeleteTodo.todoId,
      });
    },

    removeList(state, action) {
      const newRemoveList = action.payload;
      state.changed = true;
      state.removeList = [];

      state.removeList.push({ listId: newRemoveList.listId });
    },
    updateTodo(state, action) {
      const updateItem = action.payload;
      state.changed = true;
      state.updateData = [];

      state.updateData.push({
        listId: updateItem.listId,
        todoId: updateItem.todoId,
        title: updateItem.title,
        description: updateItem.description,
      });
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
