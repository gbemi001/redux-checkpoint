import { ADD_TASK } from "../Constants/action-types"
const initialState = {
    tasks: [
        {
            
        }
    ]
}
function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_TASK:
            return{
                tasks:[...state.tasks, action.payload]
            }
            default:
                return state
    }
};
export default rootReducer