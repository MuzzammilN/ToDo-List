
import React, { useState } from 'react'


function ToDoList(){

    const [tasks, setTask] = useState(["Demo 1", "Demo 2", "Demo 3"]);
    const [newTasks, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)

    }

    function addTask(){

        if(newTasks.trim() !== ""){
            setTask(t => [...tasks, newTasks]);
            setNewTask("");
        }
 
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTask(updatedTasks);

    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }

    }

    function moveTaskDown(index){

        if(index < 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);

    }
}

    return(<div className="text-center mt-100px font-sans content-center flex-1 justify-center">

        <h1 className="text-7xl font-bold text-white">To-Do-List</h1>


        <div>
            <input type="text" className="text-lg py-2 border-zinc-800 rounded-md text-black mx-2" placeholder='Enter a task...' value={newTasks} onChange={handleInputChange}/>
            <button className= "text-lg font-bold py-2 px-5 rounded-md transition ease-in-out delay-5 bg-green-600 text-white hover:bg-green-500 my-5" onClick={addTask}> Add</button>
        </div>

        <ol> 
            {tasks.map((task, i) => 
            <li className="font-bold  p-2 mb-3 border-black border-2 width-3 m-2 bg-stone-50" key={i}>
                <span className='text'>{task}</span>
                <button className='bg-red-500 mx-2 text-white font-bold py-2 px-5 rounded-md transition ease-in-out delay-5 hover:bg-red-400 py-10' onClick={() => deleteTask(i)}>
                    Delete
                </button>
                <button className="text-lg font-bold  mx-1 py-2 px-5 rounded-md transition ease-in-out delay-5 bg-blue-500 text-white hover:bg-blue-400" onClick={() => moveTaskUp(i)}>Up</button>
                <button className="text-lg font-bold  py-2 px-5 rounded-md transition ease-in-out delay-5 bg-blue-500 text-white hover:bg-blue-400" onClick={() => moveTaskDown(i)}>Down</button>
            </li>)}
        </ol>
    </div>);

}


export default ToDoList