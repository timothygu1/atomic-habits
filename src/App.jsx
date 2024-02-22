import {useState} from 'react';

import HabitsSidebar from "./components/HabitsSidebar";
import NewHabit from "./components/NewHabit";
import NoHabitSelected from "./components/NoHabitSelected";


function App() {
  const [habitsState, setHabitsState] = useState({
    selectedHabitId: undefined,
    habits: []
  });

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
      const newHabit = {
        ...habitData,
        id: Math.random()
      };

      return {
        ...prevState,
        habits: [...prevState.habits, newHabit ]
      };
    })
  }

  console.log(habitsState);

  let content;

  if (habitsState.selectedHabitId === null){
    content = <NewHabit onAdd = {handleAddHabit} />
  }
  else if (habitsState.selectedHabitId === undefined){
    content = <NoHabitSelected onStartAddHabit={handleStartAddHabit} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <HabitsSidebar onStartAddHabit={handleStartAddHabit}/>
      {content}
    </main>
  );
}

export default App;
