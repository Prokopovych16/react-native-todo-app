# react-native-todo-app


✨ Pet Project: Todo List Application

This project is a simple yet powerful todo list application designed to help you manage your tasks efficiently. The project consists of a React Native frontend and a Node.js backend, with a well-structured architecture and modern development practices.

🔗 Features

Add, edit, delete, and toggle task statuses.

Persistent task storage using PostgreSQL.

Responsive design optimized for mobile devices.

Navigation within the app using React Navigation.

RESTful API built with Node.js and Express.

Data management with Sequelize ORM.

🛠️ Tech Stack

Frontend:

React Native — Cross-platform mobile development.

React Navigation — Smooth in-app navigation.

Backend:

Node.js — Runtime environment.

Express.js — Web framework for building APIs.

Sequelize — ORM for PostgreSQL.

PostgreSQL — Robust relational database.

📆 Project Structure

.
├── backend      # Node.js server with Express, Sequelize, PostgreSQL
├── todo-app     # React Native frontend
└── README.md    # Documentation

📓 Backend Setup

Navigate to the backend directory and follow these steps:

cd backend
npm install
npm start

Environment Variables:

Create a .env file in the backend directory with the following content:

DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=5432

📱 Frontend Setup

Navigate to the todo-app directory and run the following commands:

cd todo-app
npm install
npm start

Ensure your mobile device or emulator is properly set up for React Native development.

🛠️ API Endpoints

Method

Endpoint

Description

GET

/todos

Fetch all todos

POST

/todo

Add a new todo

PATCH

/todo/:id

Update todo status

DELETE

/todo/:id

Delete a todo

📊 Database

Ensure you have PostgreSQL installed and running. Run migrations using Sequelize to set up the necessary tables.

npx sequelize-cli db:migrate

🎨 Screenshots

Task List Screen:


Add Todo Screen:


⚡ Quick Tips

Make sure your backend server is running before starting the React Native app.

Debug efficiently using tools like React Native Debugger and Postman.

✅ Future Improvements

User authentication.

Enhanced task filtering.

Push notifications for task reminders.

🛠 Contribution

Feel free to fork this repository and submit pull requests for improvements!

📃 License

This project is licensed under the MIT License.

