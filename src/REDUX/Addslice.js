import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: 'add',
    initialState: { todoList: [] }, 
    reducers: {
        addTodoItem: (state, action) => {
            const newTodo = {
                id: Math.random(),
                content: action.payload.newText
            };
            state.todoList.push(newTodo); 
        }
    }
});

export const { addTodoItem } = addSlice.actions;
export default addSlice.reducer;