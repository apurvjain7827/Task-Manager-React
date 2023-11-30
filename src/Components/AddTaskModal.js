

import React, { useState } from 'react';

const AddTaskModal = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (!taskName) {
      alert('Task name is required');
      return;
    }
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      name: taskName,
      description: taskDescription,
      priority: priority,
      completed: false,
      dueDate: dueDate,
    };
    onAddTask(newTask);
    // Reset form fields after adding task
    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4 text-center">Add Task</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddTask();
      }}>
        <div className="form-group">
          <label>Task Name:</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Task Description:</label>
          <textarea
            className="form-control"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Priority:</label>
          <select
            className="form-control"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskModal;

