import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaskCard from '../components/TaskCard';
import { fetchTasks } from '../services/TaskService';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    getTasks();
  }, []);

  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h2>Your Tasks</h2>
        <div>
          {tasks.length === 0 ? (
            <p>No tasks available</p>
          ) : (
            tasks.map(task => <TaskCard key={task._id} task={task} />)
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
