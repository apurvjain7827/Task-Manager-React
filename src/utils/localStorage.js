// utils/localStorage.js

// Function to get tasks from localStorage
export const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  };
  
  // Function to save tasks to localStorage
  export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  export const addTaskToLocalStorage = (newTask) => {
    // const tasks = getTasksFromLocalStorage();
    // tasks.push(newTask);
    // saveTasksToLocalStorage(tasks);
    const tasks = getTasksFromLocalStorage();
  const updatedTasks = [...tasks, newTask]; // Create a new array with the new task added
  saveTasksToLocalStorage(updatedTasks);
  };
  
  export const deleteTaskFromLocalStorage = (taskId) => {
    const tasks = getTasksFromLocalStorage().filter((task) => task.id !== taskId);
    saveTasksToLocalStorage(tasks);
  };

  export const updateTaskInLocalStorage = (newTask) => {
    deleteTaskFromLocalStorage(newTask.id);
    addTaskToLocalStorage(newTask)
  };