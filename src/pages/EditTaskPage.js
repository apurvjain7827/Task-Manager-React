import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTaskInLocalStorage, getTasksFromLocalStorage } from '../utils/localStorage';

const EditTaskPage = () => {
  const navigate = useNavigate();
  const tasks = getTasksFromLocalStorage();

  const temp = useParams();
  const taskId = temp.id;
  const taskToEdit = tasks.find((task) => task.id === parseInt(taskId));

  const [taskName, setTaskName] = useState(taskToEdit.name);
  const [taskDescription, setTaskDescription] = useState(taskToEdit.description);
  const [priority, setPriority] = useState(taskToEdit.priority);
  const [dueDate, setDueDate] = useState(taskToEdit.dueDate);

  const handleEditTask = () => {
    const updatedTask = {
      id: parseInt(taskId),
      name: taskName,
      description: taskDescription,
      priority: priority,
      completed: false,
      dueDate: dueDate,
    };

    updateTaskInLocalStorage(updatedTask);
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4 text-center">Edit Task</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleEditTask();
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
        <button type="submit" className="btn btn-primary">Save Task</button>
      </form>
    </div>
  );
};

export default EditTaskPage;

