import {useState} from 'react';

import HabitsSidebar from "./components/HabitsSidebar";
import NewHabit from "./components/NewHabit";
import NoHabitSelected from "./components/NoHabitSelected";
import SelectedHabit from './components/SelectedHabit';


function App() {
  const [habitsState, setHabitsState] = useState({
    selectedHabitId: undefined,
    habits: [],
    //cumbersome method for details

    details: []
  });

  
  function handleAddDetail (text){
    setHabitsState(prevState => {
      const detailId = Math.random();
      const newDetail = {
        text: text,
        habitId: prevState.selectedHabitId,
        id: detailId,
      };

      return {
        ...prevState,
        details: [newDetail, ...prevState.details]
      };
    })
  }

  function handleDeleteDetail(){}
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

  let content = <SelectedHabit 
  habit={selectedHabit} 
  onDelete={handleDeleteHabit}
  onAddDetail ={handleAddDetail}
  onDeleteDetail = {handleDeleteDetail}
  details={habitsState.details}
  />

  if (habitsState.selectedHabitId === null){
    content = <NewHabit onAdd = {handleAddHabit} onCancel={handleCancelAddHabit} />
  }
  else if (habitsState.selectedHabitId === undefined){
    content = <NoHabitSelected onStartAddHabit={handleStartAddHabit} />;
  }
  

  return (
    <main className="h-screen my-8 flex gap-8">
      <HabitsSidebar 
      onSelectHabit={handleSelectHabit}
      onStartAddHabit={handleStartAddHabit} 
      habits={habitsState.habits}
      />
      {content}
    </main>
  );
}

export default App;
