export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDelete(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
