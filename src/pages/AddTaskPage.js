import React, { useState } from 'react';
import AddTaskModal from '../Components/AddTaskModal';
import { addTaskToLocalStorage, deleteTaskFromLocalStorage } from '../utils/localStorage';

const AddTaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleAddTask = (newTask) => {
    addTaskToLocalStorage(newTask);

  };

  return (
    <div>

      <AddTaskModal onAddTask={handleAddTask} />
    </div>
  );
};

export default AddTaskPage;
