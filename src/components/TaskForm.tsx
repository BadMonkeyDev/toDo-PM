import React, {useContext, useRef, useState} from 'react';
import Input from "./Input/Input";
import {Task} from "../global";
import {TasksContext} from "./ToDoList";

const TaskForm = () => {
    const {tasks, setTasks} = useContext(TasksContext)

    const [title, setTitle] = useState('');
    const titleRef = useRef<HTMLInputElement | null>(null);
    const [isTitleValid, setIsTitleValid] = useState<boolean>(true)

    const [description, setDescription] = useState('');
    const descriptionRef = useRef<HTMLInputElement | null>(null);
    const [isDescriptionValid, setIsDescriptionValid] = useState<boolean>(true)

    const handleCreateTask = () => {
        if (!title || !description) {
            setIsTitleValid(!!title)
            setIsDescriptionValid(!!description)
            return;
        }

        const newTask: Task = {
            id: tasks.length + 1,
            title,
            description,
            status: false,
        };

        setTasks([...tasks, newTask]);

        setTitle('');
        setIsTitleValid(true)

        setDescription('');
        setIsDescriptionValid(true)

        if (titleRef.current) {
            titleRef.current.style.borderColor = 'initial';
        }
    };

    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <Input
                value={title}
                setValue={setTitle}
                inputRef={titleRef}
                isValid={isTitleValid}
                errorMessage={'This field is empty'}
            />
            <Input
                value={description}
                setValue={setDescription}
                inputRef={descriptionRef}
                isValid={isDescriptionValid}
                errorMessage={'This field is empty'}
            />
            <button
                onClick={handleCreateTask}
            >
                Create
            </button>
        </div>
    );
};

export default TaskForm;