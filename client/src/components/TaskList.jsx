import { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [message, setMessage] = useState('');

  // Fetch user's tasks when component loads
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/tasks', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTasks(data);
        console.log('Tasks fetched:', data);
      } else {
        setMessage('❌ Failed to fetch tasks');
      }
    } catch (error) {
      setMessage('❌ Connection error');
    }
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title: newTaskTitle }),
      });

      if (response.ok) {
        const newTask = await response.json();
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
        setMessage('✅ Task created successfully!');
        console.log('New task created:', newTask);
      } else {
        setMessage('❌ Failed to create task');
      }
    } catch (error) {
      setMessage('❌ Connection error');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setTasks(tasks.filter(task => task._id !== taskId));
        setMessage('✅ Task deleted successfully!');
        console.log('Task deleted:', taskId);
      } else {
        setMessage('❌ Failed to delete task');
      }
    } catch (error) {
      setMessage('❌ Connection error');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
      <h2>Your Tasks 📋</h2>
      
      {/* Create Task Form */}
      <form onSubmit={createTask} style={{ marginBottom: '30px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter a new task..."
          required
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add Task ➕
        </button>
      </form>

      {/* Message */}
      {message && (
        <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: message.includes('✅') ? '#d4edda' : '#f8d7da', borderRadius: '4px' }}>
          {message}
        </div>
      )}

      {/* Tasks List */}
      {tasks.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
          <h3>No tasks yet! 🎯</h3>
          <p>Create your first task above to get started.</p>
        </div>
      ) : (
        <div>
          <h3>Tasks ({tasks.length})</h3>
          {tasks.map(task => (
            <div 
              key={task._id} 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '15px', 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                marginBottom: '10px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <div>
                <strong>{task.title}</strong>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Created: {new Date(task.createdAt).toLocaleDateString()}
                </div>
              </div>
              <button
                onClick={() => deleteTask(task._id)}
                style={{ 
                  padding: '5px 15px', 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Delete 🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;