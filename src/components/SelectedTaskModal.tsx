import React, {FC, useContext} from 'react';
import {SelectedTask} from "../global";
import {TasksContext} from "./ToDoList";

interface SelectedTaskProps {
    selectedTask: SelectedTask
}

const SelectedTaskModal: FC<SelectedTaskProps> = ({selectedTask}) => {
    const {toggleChecked} = useContext(TasksContext)

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20}}>
            <h2 style={{textAlign: "center"}}>{selectedTask.title}</h2>
            <h3>Description:</h3>
            <p>{selectedTask.description}</p>
            <p>Status: <input type={'checkbox'} checked={selectedTask.status} onChange={() => toggleChecked(selectedTask.id)} /> </p>
        </div>
    );
};

export default SelectedTaskModal;