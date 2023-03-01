import React, {createContext, useState} from 'react';
import TaskForm from "./TaskForm";
import {ITasksContext, SelectedTask, Task} from "../global";
import TaskList from "./TaskList";
import Modal from "./Modal/Modal";
import SelectedTaskModal from "./SelectedTaskModal";

export const TasksContext = createContext<ITasksContext>({} as ITasksContext)

const ToDoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState<SelectedTask>(null);

    const handleCloseModal = () => {
        setSelectedTask(null);
        setShowModal(false);
    };

    const toggleChecked = (taskId: number) => {
        setTasks([
            ...tasks.map(task => {
                if (task.id === taskId) {
                    task.status = !task.status
                }
                return task;
            })
        ])
    }

    return (
        <TasksContext.Provider value={{tasks, setTasks, toggleChecked}}>
            <div className={'todo-list'} style={{maxWidth: 550, margin: "0 auto"}}>
                <TaskForm />
                <TaskList setSelectedTask={setSelectedTask} setShowModal={setShowModal} />
                <Modal
                    isOpen={showModal}
                    onClose={handleCloseModal}
                >
                    <SelectedTaskModal selectedTask={selectedTask} />
                </Modal>

            </div>
        </TasksContext.Provider>
    );
};

export default ToDoList;
