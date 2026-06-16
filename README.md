# 📝 BloggingWeb

A full-stack blogging platform built with Node.js, Express, and MongoDB, where users can sign up, log in, and create and manage blog posts through a clean server-rendered interface.

## ✨ Features

- User authentication (Sign up / Login) with JWT and secure cookie sessions
- Password hashing with bcrypt
- Create, view, and manage blog posts
- Image/file uploads using Multer
- Server-side rendering with EJS templates
- MongoDB database integration via Mongoose
- Modular MVC-style architecture (controllers, models, routes, services)

## 🛠️ Tech Stack

**Backend:** Node.js, Express 5
**Database:** MongoDB, Mongoose
**Templating:** EJS
**Authentication:** JSON Web Token (JWT), bcrypt, cookie-parser
**File Uploads:** Multer
**Dev Tools:** Nodemon, dotenv

## 📂 Project Structure


## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/sayanCodesDev/BloggingWeb.git

# Navigate into the project
cd BloggingWeb

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Run the App

```bash
# Development mode (with nodemon)
npm run dev

# or
npm start
```

The app will be running at `http://localhost:3000`

## 📌 Future Improvements

- Add comment system on blog posts
- Add like/bookmark functionality
- Pagination for blog listing
- Rich text editor for post creation
