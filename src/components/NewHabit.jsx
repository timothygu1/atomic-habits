import {useRef} from 'react';

import { HabitsContext } from '../store/habits-context.jsx';
import { useContext } from 'react';

import Input from "./Input.jsx";
import Modal from './Modal.jsx';

export default function NewHabit(){
    const habitsCtx = useContext(HabitsContext);

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        // validation ...

        if (enteredTitle.trim() === '' || 
        enteredDescription.trim() === '' || 
        enteredDate.trim() === ''
        )
        {
            modal.current.open();
            return;
        }

        habitsCtx.addHabit({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        })
    }

    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className ="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick ={habitsCtx.cancelAddHabit}
                     className="text-stone-800 hover:text-stone-950"
                    >
                    Cancel
                    </button>
                </li>
                <li>
                    <button onClick ={handleSave}
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    >
                    Save
                    </button>
                </li>
            </menu>
           <div>
           <Input type = "text" ref = {title}label="Title" />
           <Input ref = {description} label="Description" textarea/>
           <Input type = "date" ref = {date} label="Date"/>
           </div>

        </div>
        </>


    );
}