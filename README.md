**📚 LibSpace API**

***🚀 A Robust Backend for Library Operations***

LibSpace is a micro web-based library management backend system that provides secure user authentication and book management APIs.

This project demonstrates:

🔐 Authentication using JWT
🔒 Password hashing using bcrypt
📚 Book management using CRUD operations
🗄 Database storage using MongoDB

Users can register, log in, manage books, and securely store their personal book collections.

**Features**

🔐 User Authentication
🧑 Register a new user
🔑 Login with credentials
🔐 Secure password hashing
🎟 JWT token authentication
🚪 Logout functionality
❌ Delete user account
📚 Book Management (CRUD)

**Authenticated users can:**

➕ Add a new book
📖 View all books
🔎 Get book by ID
✏ Update book details
❌ Delete a book

Each book is linked to a specific user.

**Architecture**
LibSpace follows a layered backend architecture.

Client
⬇
API Routes
⬇
Controllers (Business Logic)
⬇
Models (Database Schemas)
⬇
MongoDB Database

**This structure improves:**

⚡ Maintainability
📦 Scalability
🧹 Clean code organization


**⚙️ Installation**

1️⃣ Clone the Repository
git clone https://github.com/yourusername/libspace.git
cd libspace
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables

**🛠 Tech Stack**

⚙ Node.js
🚂 Express.js
🗄 MongoDB
📦 Mongoose
🔐 JWT
🔒 bcrypt
🧪 Thunder Client
🎯 Project Goal

The goal of LibSpace is to demonstrate:

✔ Secure authentication
✔ REST API design
✔ CRUD operations
✔ Backend architecture using Node.js and MongoDB
