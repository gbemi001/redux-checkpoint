import React, {useState} from "react";
import { connect } from "react-redux";
import { addTask } from "../JS/Actions/actions";

const mapDispatchToProps = dispatch =>{
    return{
        addToDo: task => dispatch(addTask(task))
    }
}
const AddTask = (props)=>{
    const [id, setId] = useState("")
    const [description, setDescription] = useState("")
    const [isDone, setIsDone] = useState("")
    const handleSubmit = e =>{
        e.preventDefault()
        props.addToDo({
            id,
            description,
            isDone
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Id">Task Id: </label>
                <input type="text" name="id" id="id" onChange={e=>setId(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Description">Task description: </label>
                <textarea name="description" cols="30" rows="10" onChange={e=>setDescription(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="IsDone">Task completion status: </label>
                <input type="text" name="isDone" id="isDone" onChange={e=>setIsDone(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Add"/>
            </div>
        </form>
    )
}; export default connect(null, mapDispatchToProps) (AddTask)