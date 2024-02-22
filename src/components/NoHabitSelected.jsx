import HabitImage from '../assets/Checklist-PNG-Image.png';
import Button from './Button.jsx'

export default function NoHabitSelected({onStartAddHabit}) {
    return (
    <div className="mt-24 text-center w-2/3">
      <img 
      src={HabitImage}
       alt="A habit checklist" 
      className ="w-16 h-16 object-contain mx-auto"
      />
      <h2 className ="text-xl font-bold text-stone-500 my-4">
        No Habit Selected
        </h2>
      <p className="text-stone-400 mb-4">Select a habit or get started with a new one</p>
      <p className="mt-8">
      <Button onClick={onStartAddHabit}>Create new habit</Button>
      </p>
    </div>
    );
}