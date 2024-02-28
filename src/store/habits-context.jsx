import {createContext} from 'react';

//object containing Task object component
export const HabitsContext = createContext({
    selectedHabitId: undefined,
    habits: [],
    tasks: [],
    selectedHabit: undefined,

    selectHabit: () => {},
    startAddHabit: () => {},
    addHabit: () => {},
    cancelAddHabit: () => {},
    deleteHabit: () => {},
    addTask: () => {},
    deleteTask: () => {},
    
});
