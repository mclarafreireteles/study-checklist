import TodoContext from "./TodoContext.";
import { useState } from "react";


export function ToDoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const addToDo = (formData) => {
        const description = formData.get('description');
        setTodos(prevState => {
            const todo = {
                id: prevState.length + 1,
                description: description,
                completed: false,
                createdAt: new Date().toISOString()
            }
            return [...prevState, todo];
        })
    }

    const toggleTodoCompleted = (todoItem) => {
        setTodos(prevState => {
            return prevState.map(todo => {
                if (todo.id == todoItem.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        })
        console.log(todos)
    }

    const deleteTodo = (todo) => {
        setTodos(prevState => {
            return prevState.filter(t => t.id != todo.id)
        })
    }

    return (
        <TodoContext
            value={{
                todos,
                addToDo,
                toggleTodoCompleted,
                deleteTodo
            }}
        >
            {children}
        </TodoContext>
    )
}