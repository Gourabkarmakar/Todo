import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "TodoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload
            }
            state.todos.push(todo)
        },
        removeAllTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },



    }
})

export const { addTodo, removeAllTodo } = todoSlice.actions
export default todoSlice.reducer

