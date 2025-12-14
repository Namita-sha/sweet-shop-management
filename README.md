# 🍬 Sweet Shop Management System

A full-stack **Sweet Shop Management System** built using **React** and **Node.js**, implementing secure authentication, protected APIs, inventory management, and a clean single-page frontend experience.

---

## 📌 Project Overview

This application allows users to:

- Register and log in securely using JWT authentication
- View all available sweets
- Search sweets by name
- Filter sweets by category
- Purchase sweets with real-time quantity updates
- Prevent purchasing when stock is zero
- Log out securely

The backend is built with RESTful APIs secured using JWT, while the frontend is a modern Single Page Application (SPA) built with React.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Jest & Supertest (testing)

### Frontend
- React (Vite)
- Axios
- Custom CSS (minimal black & baby-pink theme)

---

## 🚀 Features Implemented

### Authentication
- User registration (`POST /api/auth/register`)
- User login (`POST /api/auth/login`)
- Password hashing with bcrypt
- JWT-based authentication
- Protected routes using middleware

### Sweets & Inventory
- Fetch all sweets (`GET /api/sweets`)
- Search sweets by name
- Filter sweets by category
- Purchase sweets (`POST /api/sweets/:id/purchase`)
  - Automatically decreases quantity
  - Purchase disabled when stock reaches zero

### Frontend (SPA)
- Login & Signup UI
- Sweets dashboard after login
- Logout functionality
- Real-time UI updates after purchase
- Clean and minimal UI design

---

## 🧪 Test-Driven Development (TDD)

Backend APIs were developed following **Test-Driven Development principles**:

- Tests written using **Jest** and **Supertest**
- Authentication and registration flows covered
- Red → Green → Refactor approach followed during development
- Test output verifies API correctness

### Run Backend Tests
```bash
cd backend
npm test
⚙️ Local Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/sweet-shop-management.git
cd sweet-shop-management

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend runs on:
http://localhost:3000

3️⃣ Frontend Setup
cd frontend/sweet-frontend
npm install
npm run dev


Frontend runs on:
http://localhost:5173

📸 Screenshots

Login / Signup page

Sweets dashboard

Purchase button disabled when stock is zero

My AI Usage
AI Tools Used

ChatGPT

How I Used AI

Debugging backend authentication issues (JWT, bcrypt)

Understanding MongoDB Atlas connection and errors

Structuring Express routes and middleware

Assisting with React state handling and API integration

Improving test cases and debugging failing tests

Reflection

AI was used as a development assistant, not for copying code.
All generated suggestions were reviewed, modified, and implemented manually.
AI significantly improved debugging speed and helped reinforce backend and frontend concepts.

🧠 Design & Architecture Notes

Backend handles authentication and inventory logic to ensure data integrity

Frontend focuses on user experience and real-time updates

JWT middleware protects all sensitive routes

Clean separation between frontend and backend folders

📦 Deliverables Checklist

✅ Public GitHub repository

✅ Backend with MongoDB Atlas integration

✅ Frontend Single Page Application

✅ Automated backend tests

Final Note

This project demonstrates a complete full-stack workflow, including backend APIs, database integration, frontend SPA, authentication, testing, and responsible AI usage aligned with modern development practices.