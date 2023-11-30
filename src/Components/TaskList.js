import React, { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { Button, Table,  DropdownButton, Dropdown } from 'react-bootstrap';


const TaskList = ({ tasks, onDeleteTask, onToggleComplete, onSortByPriorityDesc, onSortByCompletionStatus }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
    if (!tasks || tasks.length === 0) {
        return <div>No tasks available.</div>;
      }

      // Logic for pagination
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onSortByCompletionStatus(tasks)}>
            Completion Status
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onSortByPriorityDesc(tasks)}>Priority</Dropdown.Item>
          {/* <Dropdown.Item onClick={() => onSortByPriorityAsc(tasks)}>Priority (Ascending)</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Completion Status</th>
          <th>Name</th>
          <th>Delete</th>
          <th>Edit</th>
          <th >Priority</th>
          <th>Date-Time</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(tasks) && currentTasks.map((task) => (
          <tr key={task.id}>
            <td>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
              />
            </td>
            <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </td>
            <td>
              <Button variant="danger" onClick={() => onDeleteTask(task.id)}>
                Delete
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={() => navigate(`/editTask/${task.id}`)}>
                Edit
              </Button>
            </td>
            <td>{task.priority}</td>
            <td>{task.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>

    {/* Pagination */}
    <ul className="pagination">
        {Array.from({ length: Math.ceil(tasks.length / tasksPerPage) }).map((_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <button onClick={() => paginate(index + 1)} className="page-link">
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </>
    
  );
};

export default TaskList;
