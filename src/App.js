import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import TotalCompleteItems from "./components/TotalCompleteItems"
import Field from "./components/Field/Field"

const App = () => {
    return (
        <div className="container bg-white p-4 mt-5">
            <h1>My Todo List</h1>
            <AddTodoForm />
            <TodoList />
            <TotalCompleteItems />
            <Field/>
        </div>
    )
}

export default App
