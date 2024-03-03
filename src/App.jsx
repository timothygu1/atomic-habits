import {useState, useReducer} from 'react';

import HabitsSidebar from "./components/HabitsSidebar";
import NewHabit from "./components/NewHabit";
import NoHabitSelected from "./components/NoHabitSelected";
import SelectedHabit from './components/SelectedHabit';

import { HabitsContext } from './store/habits-context';

function habitsReducer(state, action){

  if (action.type === 'ADD_TASK') {
    const taskId = Math.random();
      const newTask = {
        text: action.payload,
        habitId: state.selectedHabitId,
        id: taskId,
      };

      return {
        ...state,
        tasks: [newTask, ...state.tasks]
      };
  }

  if (action.type === 'DELETE_TASK'){
    return { 
      ...state,
      tasks: state.tasks.filter(
        (task) => task.id !== action.payload
        ),
    };
  }

  if (action.type === 'DELETE_HABIT'){
    return { 
      ...state,
      selectedHabitId: undefined,
      habits: state.habits.filter(
        (habit) => habit.id !== state.selectedHabitId
        ),
    };
  }

  if (action.type === 'SELECT_HABIT'){
    return { 
      ...state,
      selectedHabitId: action.payload,
    };
  }

  if (action.type === 'ADD_HABIT'){
    const habitId = Math.random();
      const newHabit = {
        ...action.payload,
        id: habitId
      };

      return {
        ...state,
        selectedHabitId: undefined,
        habits: [...state.habits, newHabit ]
      };
  }

  if (action.type === 'CANCEL_ADD'){
    return {
      ...state,
      selectedHabitId: undefined,
    };
  }

  if (action.type === 'START_ADD'){
    return { 
      ...state,
      selectedHabitId: null,
    };
  }

  return state;
}

function App() {

  const [habitsState, habitsDispatch] = useReducer(
    habitsReducer, 
    {
    selectedHabitId: undefined,
    habits: [],
    //cumbersome method for tasks
    tasks: []
    }
  );


  function handleAddTask (text){
    habitsDispatch({
      type: 'ADD_TASK',
      payload: text
    });

  }

  function handleDeleteTask(id){
    habitsDispatch({
      type: 'DELETE_TASK',
      payload: id
    });

  }


  function handleDeleteHabit() {

    habitsDispatch({
      type: 'DELETE_HABIT',
    });

  }

  function handleSelectHabit(id) {
    
    habitsDispatch({
      type: 'SELECT_HABIT',
      payload: id
    })
  }

  function handleStartAddHabit(){

    habitsDispatch(
      {
        type: 'START_ADD'
      }
    );
  }

  function handleAddHabit(habitData){

    habitsDispatch(
      {
        type: 'ADD_HABIT',
        payload: habitData
      }
    );
  }

  function handleCancelAddHabit(){
    habitsDispatch(
      {
        type: 'CANCEL_ADD',
      }
    );
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
