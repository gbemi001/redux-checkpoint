import { ADD_TASK } from "../Constants/action-types";
export const addTask = newTask=> ({
    type: ADD_TASK,
    payload: newTask
})