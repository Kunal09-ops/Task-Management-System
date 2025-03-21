import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addTask, updateTask, getTasks } from '../services/api';

function TaskForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        const response = await getTasks();
        const task = response.data.find((task) => task._id === id);
        if (task) {
          setName(task.name);
          setDescription(task.description);
        }
      };
      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateTask(id, { name, description });
    } else {
      await addTask({ name, description });
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit Task' : 'Add Task'}</h2>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{id ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default TaskForm;
