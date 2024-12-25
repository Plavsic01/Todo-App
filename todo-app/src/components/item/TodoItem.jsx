import './TodoItem.css';
import { EditIcon, DeleteIcon } from '../../svg/Icons';
import Checkbox from '../ui/checkbox/Checkbox';
import { useEffect, useState } from 'react';

const TodoItem = ({ task, editTask, updateCompletion, deleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  useEffect(() => {
    setIsChecked(task.completed);
  }, [task]);

  const deleteTaskHandler = () => {
    deleteTask(task._id);
  };

  const editTaskHandler = () => {
    editTask(task);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const updatedTask = { ...task, completed: !task.completed };
    updateCompletion(updatedTask);
  };

  return (
    <>
      <div className="item-container">
        <h2 className={isChecked ? 'task-completed' : ''}>{task.title}</h2>
        <div className="btn-action">
          <Checkbox
            id={task._id}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />

          <button onClick={editTaskHandler}>
            <EditIcon />
          </button>

          <button onClick={deleteTaskHandler}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
