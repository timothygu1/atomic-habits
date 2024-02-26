import {createContext} from 'react';

//object containing Task object component
export const HabitsContext = createContext({
    selectedHabitId: undefined,
    habits: [],
    tasks: []
});
