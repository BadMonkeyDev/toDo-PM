import React, {FC, useContext} from 'react';
import {ITasksContext, Task} from "../global";
import TaskItem from "./TaskItem";
import {TasksContext} from "./ToDoList";

interface TaskListProps {
    setSelectedTask: (task: Task) => void
    setShowModal: (indicator: boolean) => void
}

const TaskList: FC<TaskListProps> = ({setSelectedTask, setShowModal}) => {
    const {tasks} = useContext<ITasksContext>(TasksContext)

    const handleTaskClick = (task: Task) => {
        setSelectedTask(task);
        setShowModal(true);
    };

    return (
        <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
            </tr>
            <tr style={{lineHeight: 20, backgroundColor: "lightgray"}}><td colSpan={4}></td></tr>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} handleTaskClick={handleTaskClick} />
            ))}
            </tbody>
        </table>
    );
};

export default TaskList;