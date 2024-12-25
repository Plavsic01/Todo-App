import './TodoList.css';
import TodoItem from '../item/TodoItem';

import { useEffect, useState } from 'react';
import FilterPanel from '../filterPanel/FilterPanel';

const TodoList = ({ tasks, editTask, updateCompletion, deleteTask }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterValue, setFilterValue] = useState('all');

  useEffect(() => {
    let updatedTasks = [];
    if (filterValue === 'completed') {
      updatedTasks = tasks.filter((task) => task.completed === true);
    } else if (filterValue === 'all') {
      updatedTasks = tasks;
    }
    setFilteredTasks(updatedTasks);
  }, [tasks, filterValue]);

  const filterHandler = (type) => {
    setFilterValue(type);
  };

  return (
    <>
      <section className="todo-list">
        <h1>Todo List</h1>

        <FilterPanel filter={filterHandler} filterValue={filterValue} />

        {filteredTasks.map((task, idx) => (
          <TodoItem
            key={idx}
            task={task}
            updateCompletion={updateCompletion}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
        {filteredTasks.length === 0 && filterValue === 'completed' && (
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <h1>Completed tasks don't exist.</h1>
          </div>
        )}

        {filteredTasks.length === 0 && filterValue === 'all' && (
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <h1>Add your tasks...</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default TodoList;
