# Task Management Application using React

## Description

This project is a Task Management Application built using React, allowing users to manage tasks by adding, editing, deleting, and marking tasks as completed. It includes various components such as Task List, Add Task Modal/Form, and Edit Task Modal/Form.

## Project Structure
- src/
  - Components/
    - TaskList.js
    - AddTaskModal.js
  - pages/
    - TaskListPage.js
    - AddTaskPage.js
    - EditTaskPage.js
  - utils/
    - localStorage.js
  - tests/
  - App.js
  - index.js

## Design Choices

![taskList](https://github.com/apurvjain7827/Task-Manager-React/assets/97018481/29e9b1da-0096-425f-9e99-c68372f21b5b)

- **Task List Component:** Displays tasks, allows marking tasks as completed, deletion of tasks, edit, priority and due date. Includes Sorting on the basis of Completion Status and Priority. Pagination is also enabled

![addTask](https://github.com/apurvjain7827/Task-Manager-React/assets/97018481/ffd23e54-7047-4e90-b011-2fcd6d8d9009)

- **Add Task Modal/Form Component:** Includes a modal/form for adding new tasks with fields for task name, description, priority level and due date.

![editPage](https://github.com/apurvjain7827/Task-Manager-React/assets/97018481/a94d8b03-6647-43d5-8a21-317c5d835a37)

- **Edit Task Modal/Form Component:** Allows editing task name, description, priority level and due date.

## State Management
- **React State:** Utilized within each component to manage their respective functionalities.
- **State Lifting:** Implemented for sharing state between components when necessary.

## Routing
- **React Router:** Implemented for navigation between task list, add task, and edit task pages.
- 
## LocalStorage
- **Browser's Local Storage:** Utilized to persist tasks, ensuring data persistence even after page refresh.

## Styling
- Applied using CSS and CSS framework (i.e., Bootstrap) for a visually appealing and user-friendly interface.

## Getting Started
- **Click On Deployed Link:** Provided in notes of submission form
  OR
- **Clone the Repository:** git clone https://github.com/apurvjain7827/Task-Manager-React.git
- **Install Dependencies:** npm install
- **Start the Development Server:** npm start
- **Run Unit Tests:** npm test
