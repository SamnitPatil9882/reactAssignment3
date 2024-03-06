import React, { useState } from "react";

function InputDiv({ addTodoData }: { addTodoData: (title: string, description: string) => void }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleTitleChange = (event:any)=>{
        setTitle(event.target.value)
    }
    const handleDescriptionChange = (event:any)=>{
        setDescription(event.target.value)
    }
    const handleSubmit = (event:any)=>{
        event.preventDefault()
        addTodoData(title,description)
        setTitle("")
        setDescription("")
    }
    return (
        <div className="h-25 container-lg mx-auto bg-slate-800 flex justify-center items-center">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <input className="placeholder-italic placeholder-slate-400 text-black rounded-md h-10 p-2 w-full m-2" type="text" required placeholder="todo" 
                onChange={(e)=>{handleTitleChange(e)}}/>
                <input className="placeholder-italic placeholder-slate-400 text-black rounded-md h-10 p-2 w-full m-2" type="text" required placeholder="description" 
                onChange={(e)=>{handleDescriptionChange(e)}}/>
                <button type="submit" className="w-20 bg-slate-400 rounded-md h-10 p-2 ml-2">+ Todo</button>
            </form>
        </div>
    )
}
export default InputDiv;
