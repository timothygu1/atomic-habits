import {useState} from 'react';

import HabitsSidebar from "./components/HabitsSidebar";
import NewHabit from "./components/NewHabit";
import NoHabitSelected from "./components/NoHabitSelected";
import SelectedHabit from './components/SelectedHabit';

import { HabitsContext } from './store/habits-context';


function App() {
  const [habitsState, setHabitsState] = useState({
    selectedHabitId: undefined,
    habits: [],
    //cumbersome method for tasks
    tasks: []
  });

  
  function handleAddTask (text){
    setHabitsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        habitId: prevState.selectedHabitId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    })
  }

  function handleDeleteTask(id){
    setHabitsState(prevState => {
      return { 
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
          ),
      };
    });
  }


  function handleDeleteHabit() {
    setHabitsState(prevState => {
      return { 
        ...prevState,
        selectedHabitId: undefined,
        habits: prevState.habits.filter(
          (habit) => habit.id !== prevState.selectedHabitId
          ),
      };
    });
  }

  function handleSelectHabit(id) {
    setHabitsState(prevState => {
      return { 
        ...prevState,
        selectedHabitId: id,
      };
    });
  }

  function handleStartAddHabit(){
    setHabitsState(prevState => {
      return { 
        ...prevState,
        selectedHabitId: null,
      };
    });
  }

  function handleAddHabit(habitData){
    setHabitsState(prevState => {
      const habitId = Math.random();
      const newHabit = {
        ...habitData,
        id: habitId
      };

      return {
        ...prevState,
        selectedHabitId: undefined,
        habits: [...prevState.habits, newHabit ]
      };
    })
  }

  function handleCancelAddHabit(){
    setHabitsState(prevState => {
      return {
        ...prevState,
        selectedHabitId: undefined,
      };
    });
  }

  console.log(habitsState);

  const selectedHabit = habitsState.habits.find(habit => habit.id === habitsState.selectedHabitId);
  const ctxValue = {
    selectedHabitId: habitsState.selectedHabitId,
    habits: habitsState.habits,
    tasks: habitsState.tasks,
    selectedHabit: selectedHabit,

    selectHabit: handleSelectHabit,
    startAddHabit: handleStartAddHabit,
    addHabit: handleAddHabit,
    cancelAddHabit: handleCancelAddHabit,
    deleteHabit: handleDeleteHabit,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask
    
  }

    let content = <HabitsContext.Provider value = {ctxValue}>
    <SelectedHabit/>
    </HabitsContext.Provider>


  if (habitsState.selectedHabitId === null){
    
    content = <HabitsContext.Provider value = {ctxValue}>
      <NewHabit/>
      </HabitsContext.Provider>

  }
  else if (habitsState.selectedHabitId === undefined){
    content = <HabitsContext.Provider value = {ctxValue}>
      <NoHabitSelected/>
      </HabitsContext.Provider>
  }
  

  return (
    <main className="h-screen my-8 flex gap-8">
      <HabitsContext.Provider value = {ctxValue}>
      <HabitsSidebar/>
      </HabitsContext.Provider>
      
      {content}
    </main>
  );
  
}

export default App;
