# Full Stack Authentication & RBAC System

## Project Overview

This project is a full-stack web application that implements JWT-based authentication and Role-Based Access Control (RBAC).

Users can register, log in, and access different parts of the application based on their assigned role.

---

##  Features

###  Authentication

* User Registration (Name, Email, Password, Role)
* User Login using Email & Password
* JWT Token generation on successful login
* Secure API communication using JWT

###  Authorization (RBAC)

Roles:

* USER
* ADMIN

Access Control:

* `/api/public` → Accessible by anyone
* `/api/user` → Accessible by USER & ADMIN
* `/api/admin` → Accessible by ADMIN only

---

##  Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Security
* JWT (JSON Web Token)
* Spring Data JPA (Hibernate)
* MapStruct
* Lombok
* Maven
* Swagger (OpenAPI)

### Frontend

* React + TypeScript
* Vite
* React Router
* React Query
* Axios
* React Hook Form
* TailwindCSS

---

##  Project Structure

root/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   ├── dto/
│   ├── security/
│   └── config/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── api/
│   ├── auth/
│   
└── README.md

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

1. Navigate to backend folder:
   cd backend

2. Configure database in application.properties:
   spring.datasource.url=jdbc:postgresql://localhost:5432/auth_db
   spring.datasource.username=root
   spring.datasource.password=my_password

3. Run the application:
   mvn spring-boot:run

---

###  Frontend Setup

1. Navigate to frontend folder:
   cd frontend

2. Install dependencies:
   npm install

3. Start the app:
   npm run dev

4. Open in browser:
   http://localhost:5173

---

## Authentication Flow

1. User registers with role (USER / ADMIN)
2. User logs in using credentials
3. Backend validates credentials and returns JWT token
4. Frontend stores token in localStorage
5. Token is sent in Authorization header:
   Authorization: Bearer <token>
6. Backend validates token before allowing access

---

## Route Protection (Frontend)

Public Routes:

* Register Page
* Login Page

Protected Routes:

* Dashboard Page

Role-based UI:

* USER → Show User Content Card
* ADMIN → Show Admin Content Card

---

## Bonus Features

* Logout functionality
* Form validation
* Error handling
* Responsive UI using TailwindCSS

---

## Author

* Snehal Tikole

---

## Notes

* This project is developed as part of an assignment.
* All code is written manually and can be explained during evaluation.
