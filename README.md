# Todo App

## 📋 Overview

Todo App is a simple and functional application that helps users manage their tasks efficiently. It supports basic CRUD operations, filtering of tasks, and task completion toggling. The application includes both a front-end React application and a back-end powered by Express.js and MongoDB.

---

## 🚀 Features

- **Create Tasks**: Add new tasks with ease.
- **Read Tasks**: View all tasks or filter by completed and incomplete tasks.
- **Update Tasks**: Edit existing tasks or mark them as completed by toggling the checkbox.
- **Delete Tasks**: Remove tasks from your list when no longer needed.
- **Task Filtering**: 
  - Show all tasks.
  - Show only completed tasks.
- **Persistent Storage**: Tasks are stored in a MongoDB database hosted in a Docker container.

---

## 🛠️ Technologies Used

### Front-End
- **React**: For building a responsive and interactive user interface.
- **CSS**: Custom styling for a modern and clean UI.
- **React Toastify**: For user notifications.

### Back-End
- **Express.js**: RESTful API for handling CRUD operations.
- **MongoDB**: Database for storing tasks.

### Tools
- **Docker Compose**: Simplified setup of MongoDB container.
- **Axios**: HTTP client for making requests between the front-end and back-end.

---

## 💻 Running the Project Locally

1. **Clone the repository**:
   ```bash
   https://github.com/Plavsic01/Todo-App.git
   cd todo-app
   ```

2. **Start the Docker containers**:
   ```bash
   docker-compose up
   ```

3. **Install front-end dependencies**:
   ```bash
   cd todo-app
   npm install
   npm run dev
   ```

4. **Install back-end dependencies**:
   ```bash
   cd todo-app-backend
   npm install
   node server.js
   ```

5. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000` to access the front-end.

   - The back-end API runs on `http://localhost:5000`.

---

## 📷 Screenshots

### 1. **Main Interface**

<img width="860" alt="Game Start" src="https://github.com/user-attachments/assets/bd183fc7-d4d6-4187-9207-f7b8f15829c2">

### 2. **Filter Feature**


<img width="860" alt="Game Start" src="https://github.com/user-attachments/assets/9ffab64b-280c-4024-950f-c52a6fef8e0f">



## 📖 Future Enhancements

- Add support for due dates and task priorities.
- Implement user authentication to manage personal task lists.
- Enhance the UI for a more modern design.
