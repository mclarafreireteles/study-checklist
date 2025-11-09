import TodoContext from "./TodoContext.";
import { useEffect, useState } from "react";

const TODOS = 'todos'

export function ToDoProvider({ children }) {
    const savedTodo = localStorage.getItem(TODOS);
    const initalTodos = savedTodo ? JSON.parse(savedTodo) : [];

    const [showDialog, setShowDialog] = useState(false);
    const [todos, setTodos] = useState(initalTodos);
    const [selectedTodo, setSelectedTodo] = useState()

    const openFormTodoDialog = (todo) => {
        if (todo) {
            setSelectedTodo(todo);
        }
        setShowDialog(true);
    }
    const closeFormTodoDialog = () => {
        setShowDialog(false);
        setSelectedTodo(null);
    }

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos));
    }, [todos]);



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
    const editTodo = (formData) => {
        setTodos(prevState => {
            return prevState.map(todo => {
                if (todo.id == selectedTodo.id) {
                    return {
                        ...todo,
                        description: formData.get('description')
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
                deleteTodo,
                showDialog,
                openFormTodoDialog,
                closeFormTodoDialog,
                selectedTodo,
                editTodo
            }}
        >
            {children}
        </TodoContext>
    )
}