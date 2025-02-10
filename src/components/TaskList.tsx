interface TaskListProps {
    taskList: string[];
    onDeleteTask: (task: string) => void;
}
export default function TaskList({ taskList, onDeleteTask }: TaskListProps) {
  return (
    <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => onDeleteTask(task)}>Delete</button>
            </li>
          ))}
        </ul>
  );
}