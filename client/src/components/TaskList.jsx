function TaskList({ tasks, onDelete }) {
  if (!Array.isArray(tasks)) return <p>No tasks yet</p>;

  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={task._id || i}>
          {task.title}
          <button onClick={() => onDelete(i)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;