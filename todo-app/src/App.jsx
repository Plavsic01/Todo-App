import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoInput from './components/input/TodoInput';
import TodoList from './components/list/TodoList';
import axios from 'axios';
import { toast, ToastContainer, Slide } from 'react-toastify';

const URL = 'http://localhost:5000/todos';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(`${URL}`);
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const response = await axios.post(`${URL}`, task);
      setTasks((prevTasks) => [...prevTasks, response.data]);
      toast.success('Todo added successfully');
    } catch (err) {
      const errMsg = err.response.data.message;
      toast.error(errMsg);
    }
  };

  const editTask = async (task) => {
    try {
      await axios.put(`${URL}/${task._id}`, task);
      setTasks((prevTasks) => {
        const index = prevTasks.findIndex((tsk) => tsk._id === task._id);
        const updatedTasks = [...prevTasks];
        updatedTasks[index] = task;
        return updatedTasks;
      });
      setTaskToEdit(null);
      toast.success('Todo updated successfully');
    } catch (err) {
      const errMsg = err.response.data.message;
      toast.error(errMsg);
    }
  };

  const updateTaskCompletion = async ({ _id, completed }) => {
    try {
      await axios.put(`${URL}/${_id}`, {
        completed: completed,
      });
      setTasks((prevTasks) => {
        const index = prevTasks.findIndex((tsk) => tsk._id === _id);
        const updatedTasks = [...prevTasks];
        updatedTasks[index].completed = completed;
        return updatedTasks;
      });
    } catch (err) {
      const errMsg = err.response.data.message;
      toast.error(errMsg);
    }
  };

  const deleteTask = async (id) => {
    const foundTask = tasks.filter((task) => task._id !== id);

    try {
      const response = await axios.delete(`${URL}/${id}`);
      const msg = response.data['message'];
      toast.success(msg);
      setTasks(foundTask);
    } catch (err) {
      const errMsg = err.response.data.message;
      toast.error(errMsg);
    }
  };

  const editTaskHandler = (task) => {
    setTaskToEdit(task);
  };

  const cancelEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <>
      <Header />
      <TodoInput
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
        cancelEdit={cancelEdit}
      />
      <TodoList
        tasks={tasks}
        editTask={editTaskHandler}
        updateCompletion={updateTaskCompletion}
        deleteTask={deleteTask}
      />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
