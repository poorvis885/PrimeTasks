import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TaskDetails = ({ task }) => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h2>{task.title}</h2>
        <p>Description: {task.description}</p>
        <p>Status: {task.completed ? "Done ✅" : "Pending ⏳"}</p>
      </main>
      <Footer />
    </div>
  );
};

export default TaskDetails;
