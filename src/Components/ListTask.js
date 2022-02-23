import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state =>{
    return{
        tasks:state.tasks
    }
}
const ListTask = (props) => {
    return(
        <div>
            {props.tasks.map((task)=>
            <div>
                <h2>{task.id}</h2>
                <p>{task.description}</p>
                <h3>{task.isDone}</h3>
            </div>
            )}
        </div>
    )
}; export default connect(mapStateToProps) (ListTask)