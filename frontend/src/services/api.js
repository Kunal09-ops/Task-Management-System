// import axios from 'axios';

// const API_URL = 'http://localhost:5000';

// export const getTasks = async () => axios.get(`${API_URL}/tasks`);
// export const addTask = async (task) => axios.post(`${API_URL}/tasks`, task);
// export const updateTask = async (id, task) => axios.put(`${API_URL}/tasks/${id}`, task);
// export const deleteTask = async (id) => axios.delete(`${API_URL}/tasks/${id}`);



// import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000' });

// export const fetchTasks = async () => {
//     try {
//         const response = await API.get('/tasks');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//         throw error;
//     }
// };







// src/services/api.js

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Fetch all tasks
export const getTasks = async () => {
    try {
        const response = await API.get('/tasks');
        console.log('Full response:', response); // Log the full response for debugging
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};

// Add a new task
export const addTask = async (taskData) => {
    try {
        const response = await API.post('/tasks', taskData);
        return response.data;
    } catch (error) {
        console.error('Error adding task:', error);
    }
};

// Update a task
export const updateTask = async (taskId, updatedData) => {
    try {
        const response = await API.put(`/tasks/${taskId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
    }
};

// Delete a task
export const deleteTask = async (taskId) => {
    try {
        const response = await API.delete(`/tasks/${taskId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};




// import axios from 'axios';

// const API = axios.create({ baseURL: '/api' });

// export const getTasks = async () => {
//     try {
//         const response = await API.get('/tasks');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//     }
// };
