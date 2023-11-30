import React from 'react';
  import { render, screen, fireEvent } from '@testing-library/react';
  import AddTaskPage from '../pages/AddTaskPage';

  describe("Test Add Task", () => {
    test('renders learn react link', () => {
        render(<AddTaskPage />);
        const linkElement = screen.getByText(/Task Name/i);
        expect(linkElement).toBeInTheDocument();
      });
  
      test('renders learn react link 2', () => {
          render(<AddTaskPage />);
          const linkElement = screen.getByText(/Task Description/i);
          expect(linkElement).toBeInTheDocument();
        });
        test('renders learn react link 3', () => {
          render(<AddTaskPage />);
          const linkElement = screen.getByText(/Priority/i);
          expect(linkElement).toBeInTheDocument();
        });
        test('renders learn react link 4', () => {
            // render(<AddTaskModal onAddTask={() => {}} />);
            render(<AddTaskPage />);
          const heading = screen.getByRole("heading");
          expect(heading).toBeInTheDocument();
          expect(heading).toHaveClass('mt-5');
          expect(heading).toHaveClass('mb-4');
        });
  })