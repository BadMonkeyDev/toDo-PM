import React, {Dispatch, SetStateAction} from "react";

export type RefType<T> = React.MutableRefObject<T | null>

export type Task = {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

export type SelectedTask = Type | null

export interface ITasksContext {
    tasks: Task[],
    setTasks: Dispatch<SetStateAction<Task[]>>
    toggleChecked: (id: number) => void
}