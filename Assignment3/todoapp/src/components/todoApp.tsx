import React, { useState } from "react";
import Heading from "./heading";
import InputDiv from "./inputTodo";
import todoInfo from "../models/todoItem";
import useFetch from "../hooks/useFetch";
import TodoItem from "./todoItem";
import TodoList from "./todoList";
function TodoApp() {
    const [todoList, setTodoList]= useFetch("http://localhost:8000/todos")
    const addTodoData = (title:string,description:string) => {
        if (title === ""||description === "") {
            return;
        }
        const id = Math.abs(Math.floor(Math.random() * Date.now()));
        const todoInfo: todoInfo = { title, isCompleted: false, id,description };
        setTodoList(todoList => [...todoList, todoInfo]);
    };
    const checkChanges = (id:number) => {
        setTodoList(todoList.map((todo)=>{
            if (todo.id === id) {
                todo.isCompleted =!todo.isCompleted;
            }
            return todo;
        }))
    }
    const handleDelete = (id:number) =>{
        setTodoList(todoList.filter((todo)=>{
            return todo.id!== id;
        }))
    }
    return (
        <div className="h-screen w-screen mx-auto bg-slate-500  ">
            <Heading />
            <InputDiv addTodoData={addTodoData}/>
            <TodoList todoList={todoList} checkChanges={checkChanges} handleDelete={handleDelete}/>
        </div>
    )
}
export default TodoApp;