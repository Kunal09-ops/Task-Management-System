import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../services/api';


function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/add">Add New Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.name} - {task.description}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
            <Link to={`/edit/${task._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
