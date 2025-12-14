<img width="1920" height="831" alt="Screenshot (512)" src="https://github.com/user-attachments/assets/e0a38fae-6282-4640-afa0-a71936748797" /># 🍬 Sweet Shop Management System

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
```
## ⚙ Local Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/sweet-shop-management.git
cd sweet-shop-management
```
2️⃣ Backend Setup
```bash

cd backend
npm install
npm run dev
```
Backend runs on:
http://localhost:3000

3️⃣ Frontend Setup
```bash
cd frontend/sweet-frontend
npm install
npm run dev
```
Frontend runs on:
http://localhost:5173

📸 Screenshots

Login / Signup Page
<img width="1920" height="831" alt="Screenshot (512)" src="https://github.com/user-attachments/assets/61b6194e-bf1a-48d4-a22c-46f18982e097" />

<img width="1920" height="843" alt="Screenshot (511)" src="https://github.com/user-attachments/assets/cd3872f4-9132-4bed-98e1-10d9a58f3a8c" />


Sweets Dashboard
<img width="1920" height="871" alt="Screenshot (513)" src="https://github.com/user-attachments/assets/20faa5c9-d14f-41a9-805e-f16624557fc7" />

<img width="1920" height="881" alt="Screenshot (515)" src="https://github.com/user-attachments/assets/2c8e164b-06da-4c00-861e-8871abaa6bed" />


Purchase button disabled when stock is zero
<img width="1920" height="871" alt="Screenshot (513)" src="https://github.com/user-attachments/assets/103f3d5c-2c96-468b-920e-764c77177323" />



---
🤖 AI Usage
AI Tools Used
ChatGPT
---
How AI Was Used
Debugging backend authentication issues (JWT, bcrypt)

Understanding MongoDB Atlas connections and errors

Structuring Express routes and middleware

Assisting with React state management and API integration

Improving test cases and debugging failing tests
---
Reflection
AI was used strictly as a development assistant and not for copying code.
All suggestions were reviewed, modified, and implemented manually.
AI significantly improved debugging speed and reinforced full-stack concepts.
---
🧠 Design & Architecture Notes
Backend handles authentication and inventory logic to ensure data integrity

Frontend focuses on user experience and real-time updates

JWT middleware protects sensitive routes

Clean separation between frontend and backend



