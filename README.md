# 📚 LibSpace API

🚀 A Robust Backend for Library Operations

LibSpace is a micro web-based library management backend system built using Node.js, Express.js, and MongoDB.  
It demonstrates secure authentication using JWT and CRUD operations for managing books.

Users can register, login, add books, view books, update books, delete books, and logout securely.

---

# ✨ Features

## 🔐 User Authentication
🧑 Register new users  
🔑 Login users  
🔒 Password hashing using bcrypt  
🎟 JWT token authentication  
🚪 Logout with token blacklist  
❌ Delete user account  

---

## 📚 Book Management

Authenticated users can:

➕ Add a new book  
📖 View all books  
🔎 Get book by ID  
✏ Update book details  
❌ Delete a book  

Each book belongs to a specific user.

---

# 🏗 Architecture

Client  
↓  
Routes (API Layer)  
↓  
Controllers (Business Logic)  
↓  
Models (Database Schema)  
↓  
MongoDB Database  

---

# 🗂 Project Structure

MY-LIBSPACE-MAIN

Config  
└── db.js  

controller  
├── authController.js  
└── bookController.js  

middlewares  
└── verify_token.js  

models  
├── user.model.js  
├── book.model.js  
└── blackListerToken.js  

routes  
├── user.route.js  
└── book.route.js  

index.js  
package.json  
.gitignore  
.env.example  
README.md  

---

# ⚙ Installation

### 1️⃣ Clone Repository

git clone https://github.com/SSDP-codes/LibSpace-Project.git

cd LibSpace-Project

---

### 2️⃣ Install Dependencies

npm install

---

### 3️⃣ Configure Environment Variables

Create a file called `.env`

PORT=5000  
MONGO_URI=mongodb://127.0.0.1:27017/libspace  
JWT_SECRET=libspace_secret  

---

### 4️⃣ Start MongoDB

Use MongoDB Compass and connect to:

mongodb://127.0.0.1:27017

Database name:

libspace

---

### 5️⃣ Run Server

npm run dev

or

npm start

Expected output:

Connected to Database  
Server running on port 5000  

---

# 🔌 API Endpoints

## 🔐 Authentication

Register  
POST /api/auth/register

Body

{
"name":"Sai",
"email":"sai@gmail.com",
"password":"123456"
}

---

Login  
POST /api/auth/login

Returns JWT Token

---

Logout  
POST /api/auth/logout

Header

Authorization: Bearer TOKEN

---

Delete User  
DELETE /api/auth/delete

---

# 📚 Book Routes

Add Book  
POST /api/book/add

Get Books  
GET /api/book

Get Book by ID  
GET /api/book/:id

Update Book  
PUT /api/book/:id

Delete Book  
DELETE /api/book/:id

---

# 🧪 API Testing

You can test APIs using:

⚡ Thunder Client  
📮 Postman  

Example header:

Authorization: Bearer TOKEN

---

# 🔐 Security

Password hashing using bcrypt  
JWT authentication  
Protected routes using middleware  
Token blacklist for logout  
Error handling  

---

# 🛠 Tech Stack

Node.js  
Express.js  
MongoDB  
Mongoose  
JWT  
bcrypt  
Thunder Client  

---

⭐ If you like this project, consider starring the repository.
