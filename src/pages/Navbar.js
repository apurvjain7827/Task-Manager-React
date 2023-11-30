import React from 'react';
import AddTaskModal from '../Components/AddTaskModal';
import { addTaskToLocalStorage, deleteTaskFromLocalStorage } from '../utils/localStorage';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  

  return (
    
    <div style={{display:'flex',padding:'0.5'}}>
                <Link to="/" style={{textDecoration:'none'}}><h1 style={{marginTop:'1rem',marginLeft:'1rem'}}>Task List</h1></Link>
                <Link to="/addTask" style={{textDecoration:'none'}}><h2 style={{marginLeft:'2rem',marginTop:'1.5rem'}}>Add Task</h2></Link>
                
                
            </div>
    
  );
};

export default Navbar;
