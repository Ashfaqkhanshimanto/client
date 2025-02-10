import { useState } from "react";
import TaskList from "../components/TaskList";

export default function Tasks() {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTask.trim()) {
            setTaskList([...taskList, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (taskToDelete: string) => {
        const updatedTasks = taskList.filter((task) => task !== taskToDelete);
        setTaskList(updatedTasks);
    };

    return (
        <div className="container">
        
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit">Add new task</button>
            </form>
            
            <TaskList taskList={taskList} onDeleteTask={handleDeleteTask}/>
        </div> )};