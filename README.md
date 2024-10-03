# 🎓 Student CRUD Backend

Welcome to the **Student CRUD Backend** project! This application allows you to perform **Create**, **Read**, **Update**, and **Delete** operations on student records. It uses **Node.js**, **Express**, and **MongoDB** to manage student data such as name, roll number, branch, degree, date of birth, gender, and more! 🌟

## ✨ Features

- 📋 **Create** new student records
- 🔍 **Read** existing student details
- ✏️ **Update** student information
- 🗑️ **Delete** student records
- 🛠️ Built using **Node.js**, **Express**, and **MongoDB**
- 🔐 Secure with proper validation and error handling

## 🏗️ Project Structure

📂 Student CRUD Backend ├── 📂 config │ └── database.js # MongoDB connection ├── 📂 controllers │ └── studentController.js # CRUD operations logic ├── 📂 models │ └── studentModel.js # Mongoose schema ├── 📂 routes │ └── studentRoutes.js # Routes for API endpoints ├── 📂 middlewares │ └── errorMiddleware.js # Error handling │ └── catchAsyncErrors.js # Async error handler ├── .env # Environment variables ├── .gitignore # Git ignored files ├── server.js # Entry point of the app └── README.md # Project README

bash
Copy code

## 🚀 How to Run the Project

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/student-crud-backend.git
   cd student-crud-backend
Install dependencies
Make sure you have Node.js and MongoDB installed, then run:

bash
Copy code
npm install
Set up your .env file
Create a .env file in the root folder and add your MongoDB URI and PORT:

makefile
Copy code
MONGO_URI=your_mongodb_uri
PORT=5000
Run the server
To start the server, run:

bash
Copy code
npm run dev
The server will be running on http://localhost:5000.

🛠️ API Endpoints
GET /api/students - Get all students
POST /api/students - Create a new student
GET /api/students/:id - Get a particular student by ID
PUT /api/students/:id - Update student information
DELETE /api/students/:id - Delete a student
📝 Sample Data
json
Copy code
{
  "name": "John Doe",
  "rollNo": "12345",
  "branch": "Computer Science",
  "degree": "B.Tech",
  "DOB": "1999-05-15",
  "gender": "Male",
  "currentYear": 4,
  "CGPA": 8.5,
  "SGPA": 9.0,
  "passoutYear": 2024,
  "contactNumber": "9876543210"
}
🧑‍💻 Technologies Used
Backend: Node.js, Express
Database: MongoDB, Mongoose
Tools: Postman, Render for deployment
📦 Deployment on Render
Create a new service on Render and connect your GitHub repository.
Add environment variables in the Render dashboard (MONGO_URI, PORT).
Deploy your service and access it via the provided URL.
🐛 Error Handling
Custom error handling middleware ensures the application doesn’t crash on invalid requests.
Asynchronous errors are caught using catchAsyncErrors.