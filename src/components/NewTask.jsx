import { HabitsContext } from '../store/habits-context';
import { useContext } from 'react';

import {useState} from 'react';

export default function NewTask(){
    
    const habitsCtx = useContext(HabitsContext);

    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if (enteredTask.trim()==='') {
            return;
        }
        habitsCtx.addTask(enteredTask);
        setEnteredTask('');
    }


    return (
    <div className ="flex items-center gap-4">
        <input type = "text" 
        className="w-64 px-2 py-1 bg-stone-200 rounded-sm"
        onChange = {handleChange}
        value={enteredTask}
        />
        <button 
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}>
            Add Task</button>

    </div>
    );
}