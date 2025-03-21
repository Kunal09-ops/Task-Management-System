//server/server.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });
const taskRoutes = require('./routes/taskRoutes');



connectDB();

app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
// Sample Route to check server status
// app.get('/', (req, res) => {
//     res.send("Server is up and running!");
// });

app.get('/api/tasks', (req, res) => {
    const tasks = [{ id: 1, name: 'Sample Task' }]; // Example tasks
    res.json({ message: "Tasks fetched successfully!" });
});



app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const path = require('path');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../frontend/build')));

// // Your API routes
// app.get('/api/tasks', (req, res) => {
//     res.json({ message: 'API working' });
// });

// // Catch-all route to serve the frontend for any other route
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });


// // Start the server


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
