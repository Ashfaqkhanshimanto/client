import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { getTasks } from "../services/apiService";

export default function Tasks() {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [newTask, setNewTask] = useState("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch tasks from API on component mount
    useEffect(() => {
        getTasks()
            .then((data) => {
                setTaskList(data.tasks); // Set tasks from API
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTask.trim()) {
            setTaskList([...taskList, newTask]);
            setNewTask("");
        }
    };

    const handleDeleteTask = (taskToDelete: string) => {
        setTaskList(taskList.filter((task) => task !== taskToDelete));
    };

    return (
        <div className="task-container">
            {/* Show loading message */}
            {loading && <p>Loading...</p>}

            {/* Show error message if there’s an error */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Show form only if not loading or error */}
            {!loading && !error && (
                <>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="New task" 
                            value={newTask} 
                            onChange={(e) => setNewTask(e.target.value)} 
                        />
                        <button type="submit" className="new-task-btn">Add new task</button>
                    </form>
                    <TaskList taskList={taskList} onDeleteTask={handleDeleteTask} />
                </>
            )}
        </div>
    );
}
