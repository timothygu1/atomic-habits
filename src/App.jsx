import HabitsSidebar from "./components/HabitsSidebar";
import NewHabit from "./components/NewHabit";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <HabitsSidebar/>
      <NewHabit/>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
    </main>
  );
}

export default App;
