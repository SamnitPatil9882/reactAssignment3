import { Link } from "react-router-dom";
import todoInfo from "../models/todoItem";

function TodoItem(props: { todoItem: todoInfo, checkChanges: (id: number) => void, handleDelete: (id: number) => void }) {
    console.log("todoItem: ", props.todoItem);

    return (
        
            <div className="w-6/12	 flex items-center bg-slate-300 m-2 p-2">
                <Link to={`/todo/${props.todoItem.id}`}>
                <input type="checkbox" className="w-6 h-6 checked:bg-blue-500 p-0 m-0" checked={props.todoItem.isCompleted}
                    onChange={() => { props.checkChanges(props.todoItem.id) }} />
                <div className="w-full flex flex-col m-2 items-center bg-slate-500">
                    <h2 className="text-3xl text-white bg-slate-400 w-full flex justify-center">{props.todoItem.title}</h2>
                    <h4 className="text-2xl text-white">{props.todoItem.description}</h4>
                </div>
                <button className="bg-red-500 text-white rounded-xl p-2" onClick={() => { props.handleDelete(props.todoItem.id) }}>Delete</button>
            
        </Link>
        </div>
    );
}

export default TodoItem;
