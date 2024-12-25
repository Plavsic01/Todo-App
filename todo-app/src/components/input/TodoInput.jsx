import { useEffect, useState } from 'react';
import AlertDialog from '../ui/alertDialog/AlertDialog';
import './TodoInput.css';

const TodoInput = ({ addTask, editTask, cancelEdit, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setShowDialog(false);
    setTitle('');
    cancelEdit();
  };

  useEffect(() => {
    if (taskToEdit !== null) {
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const addTaskHandler = () => {
    if (!title.trim()) {
      return;
    }
    if (taskToEdit) {
      editTask({ ...taskToEdit, title: title });
    } else {
      addTask({ title: title, isCompleted: false });
    }
    setTitle('');
  };

  return (
    <>
      <section className="input-container">
        <input
          id="input"
          className="input"
          type="text"
          value={title}
          placeholder="New Task"
          onChange={handleTitle}
        />
        <button className="task-btn" onClick={addTaskHandler}>
          {taskToEdit ? 'Edit task' : 'Add new task'}
        </button>
        {taskToEdit && (
          <button className="cancel-btn" onClick={() => setShowDialog(true)}>
            Cancel
          </button>
        )}
        {showDialog && (
          <AlertDialog
            message="Do you want to cancel?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </section>
    </>
  );
};

export default TodoInput;
