import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div style={{
      border: '1px solid #ddd', 
      padding: '15px', 
      margin: '10px', 
      borderRadius: '8px'
    }}>
      <h3>{task.title}</h3>
      <p>Status: {task.completed ? 'Done ✅' : 'Pending ⏳'}</p>
    </div>
  );
};

export default TaskCard;
