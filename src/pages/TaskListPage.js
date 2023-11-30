import React, { useState, useEffect } from 'react';
import TaskList from '../Components/TaskList';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../utils/localStorage';
import { Button, Table } from 'react-bootstrap';


const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = getTasksFromLocalStorage();


    if (Array.isArray(savedTasks)) { // Check if savedTasks is an array
      setTasks(savedTasks);
    } else {
      // Handle cases where savedTasks is not an array (could be null or undefined)
      // For instance, setTasks to an empty array or handle as needed
      setTasks([]);
    }
  }, []);

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const sortByPriorityDesc = (tasksToSort) => {
    const sorted = tasks.slice().sort((a, b) => {
      if (a.priority === 'high' && b.priority !== 'high') return -1;
      if (b.priority === 'high' && a.priority !== 'high') return 1;
      if (a.priority === 'medium' && b.priority === 'low') return -1;
      if (b.priority === 'medium' && a.priority === 'low') return 1;
      return 0;
    });
    setTasks(sorted);
    saveTasksToLocalStorage(sorted);
  };

  // const sortByPriorityAsc = (tasksToSort) => {
  //   const sorted = tasks.slice().sort((a, b) => {
  //     if (a.priority === 'low' && b.priority !== 'low') return -1;
  //       if (b.priority === 'low' && a.priority !== 'low') return 1;
  //       if (a.priority === 'medium' && b.priority === 'high') return -1;
  //       if (b.priority === 'medium' && a.priority === 'high') return 1;
  //       return 0;
  //   });
  //   setTasks(sorted);
  //   saveTasksToLocalStorage(sorted);
  // };

  const sortByCompletionStatus = (tasksToSort) => {
    const sorted = tasks.slice().sort((a, b) => {
        if(a.completed === false && b.completed === true) return -1;
        if(a.completed === true && b.completed === false) return 1;
        return 0;
    });
    setTasks(sorted);
    saveTasksToLocalStorage(sorted);
  };



  return (
    <div>
      <h1 className="mb-4 font-weight-bold text-uppercase text-center">Task List</h1>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleComplete={toggleComplete} onSortByPriorityDesc={sortByPriorityDesc} onSortByCompletionStatus={sortByCompletionStatus} />
    </div>
  );
};

export default TaskListPage;
