import Button from './Button.jsx'

export default function HabitsSidebar({
    onStartAddHabit, 
    habits, 
    onSelectHabit, 
    selectedHabitId}){

    return( <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
            Your Habits</h2>
        <div>
            <Button onClick = {onStartAddHabit}>
                + Add Habit
            </Button>
            
        </div>
        <ul className ="mt-8">
            {habits.map((habit) => {

                let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"  
                
                if (habit.id === selectedHabitId){
                    cssClasses += " bg-stone-800 text-stone-200"
                }

                else {
                    cssClasses += " text-stone-400"
                }

                return (<li key={habit.id}>
                    <button className={cssClasses} 
                     onClick ={() => onSelectHabit(habit.id)}
                     >
                    {habit.title}
                    </button>
                </li>
                );
            })}
            
        </ul>
    </aside>
    );
}