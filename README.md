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

## 🛠️ API Endpoints

- **GET** `/api/students` - Get all students
- **POST** `/api/students` - Create a new student
- **GET** `/api/students/:id` - Get a particular student by ID
- **PUT** `/api/students/:id` - Update student information
- **DELETE** `/api/students/:id` - Delete a student

## 📝 Sample Data

```json
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

## 🧑‍💻 Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Tools:** 
  - Postman for API testing
  - Render for cloud deployment
  - Nodemon for development server

## 📦 Deployment on Render

1. **Create a new service:**
   - Visit [Render](https://render.com) and create an account (if you don’t have one).
   - Create a new web service and connect your GitHub repository.
  
2. **Environment variables:**
   - In the Render dashboard, go to your web service's settings.
   - Add the following environment variables:
     - `MONGO_URI`: Your MongoDB connection string
     - `PORT`: The port your server will listen on (usually 5000 or specified in your code)

3. **Deploy the service:**
   - Render will automatically build and deploy your web service.
   - After deployment, your API will be accessible via the provided Render URL.

## 🐛 Error Handling

- **Custom error handling middleware:**  
  A middleware catches errors and sends a structured response without crashing the application.

- **Asynchronous error handling:**  
  All async routes are wrapped using the `catchAsyncErrors` function, ensuring errors are caught and passed to the error handler, maintaining smooth execution.

### Example of error handling middleware:
```javascript
const catchAsyncErrors = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
