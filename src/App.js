import logo from './logo.svg';
import './App.css';
import TaskList from './Components/TaskList';
import AddTaskModal from './Components/AddTaskModal';
import TaskListPage from './pages/TaskListPage';
import AddTaskPage from './pages/AddTaskPage';
import Navbar from './pages/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <div className="App">
      {/* <AddTaskPage />
      <TaskListPage /> */}
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
