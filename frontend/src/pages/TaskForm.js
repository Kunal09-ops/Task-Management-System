import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addTask, updateTask, getTasks } from '../services/api';
import '../styles.css';





// function TaskForm() {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       const fetchTask = async () => {
//         const response = await getTasks();
//         const task = response.data.find((task) => task._id === id);
//         if (task) {
//           setName(task.name);
//           setDescription(task.description);
//         }
//       };
//       fetchTask();
//     }
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (id) {
//       await updateTask(id, { name, description });
//     } else {
//       await addTask({ name, description });
//     }
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{id ? 'Edit Task' : 'Add Task'}</h2>
//       <input
//         type="text"
//         placeholder="Task Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Task Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button type="submit">{id ? 'Update' : 'Add'}</button>
//     </form>
//   );
// }

function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      if (id) {
          const fetchTask = async () => {
              const task = await getTasks(id);
              if (task) {
                  setTaskName(task.name);
                  setTaskDescription(task.description);
                  setIsUpdating(true);
              }
          };
          fetchTask();
      }
  }, [id]);

  const handleSubmit = async () => {
      if (isUpdating) {
          await updateTask(id, { name: taskName, description: taskDescription });
          alert('Task updated successfully!');
      } else {
          await addTask({ name: taskName, description: taskDescription });
          alert('Task added successfully!');
      }
      navigate('/');
  };

  return (
      <div className="container mt-5">
          <h2 className="text-center mb-4">{isUpdating ? 'Update Task' : 'Add Task'}</h2>
          <div className="card p-4 shadow-sm">
              <div className="row">
                  <div className="col-md-5 mb-3">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Task Name"
                          value={taskName}
                          onChange={(e) => setTaskName(e.target.value)}
                      />
                  </div>
                  <div className="col-md-5 mb-3">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Task Description"
                          value={taskDescription}
                          onChange={(e) => setTaskDescription(e.target.value)}
                      />
                  </div>
                  <div className="col-md-2 mb-3">
                      <button
                          className="btn btn-primary w-100"
                          onClick={handleSubmit}
                      >
                          {isUpdating ? 'Update' : 'Add'}
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default TaskForm;
