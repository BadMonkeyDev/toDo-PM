import React, {FC, useContext} from 'react';
import {Task} from "../global";
import {TasksContext} from "./ToDoList";

interface TaskItemProps {
    task: Task
    handleTaskClick: (task: Task) => void
}

const TaskItem: FC<TaskItemProps> = ({task, handleTaskClick}) => {
    const {toggleChecked} = useContext(TasksContext)

    return (
        <tr key={task.id} onClick={() => handleTaskClick(task)} style={{cursor: "pointer"}}>
            <td>{task.id}.</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
                <input type="checkbox" checked={task.status} onClick={e => e.stopPropagation()} onChange={() => toggleChecked(task.id)} />
            </td>
        </tr>
    );
};

export default TaskItem;