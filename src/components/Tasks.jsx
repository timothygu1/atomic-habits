import { HabitsContext } from "../store/habits-context";
import { useContext } from "react";

import NewTask from "./NewTask"

export default function Tasks() {

  const habitsCtx = useContext(HabitsContext);

    return (
    <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        
        <HabitsContext.Provider value = {habitsCtx}><NewTask/></HabitsContext.Provider>
        
        {habitsCtx.tasks.length === 0 && (
        <p className="text-stone-800 my-4">
            This habit does not have any tasks yet.
        </p>
        )}
       {habitsCtx.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {habitsCtx.tasks.map((task) =>{
            
            return task.habitId === habitsCtx.selectedHabitId ? (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => habitsCtx.deleteTask(task.id)}
                >
                  Clear
                </button>
              </li>
            ) : null
            })}
        </ul>
      )}
    </section>
  );
}