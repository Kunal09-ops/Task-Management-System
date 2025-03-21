import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskForm from './pages/TaskForm';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './App.css'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;



// function App() {
//   return (
//       <div className="container mt-5">
//           <h1 className="text-center text-primary">Welcome to Zidio Task Management</h1>
//           <button className="btn btn-success">Add Task</button>
//           <div className="card mt-3">
//               <div className="card-body">
//                   <h5 className="card-title">Task Title</h5>
//                   <p className="card-text">Task description goes here.</p>
//                   <button className="btn btn-danger">Delete</button>
//               </div>
//           </div>
//       </div>
//   );
// }

// export default App;










// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
