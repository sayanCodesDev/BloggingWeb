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

## 📂 Project Structure

BloggingWeb/
├── app.js                      # App entry point — sets up Express, EJS, DB, routes
├── connect.js                  # MongoDB connection (mongoose.connect)
├── package.json
│
├── controllers/
│   ├── authControl.js          # handleUserSignup, handleUserLogin
│   └── index.js                # handleBlogSubmission
│
├── middlewares/
│   └── auth.js                 # checkForAuthentication — verifies JWT cookie
│
├── services/
│   └── authen.js                # setUser (sign JWT), getUser (verify JWT)
│
├── models/
│   ├── userAuth.js              # User schema (bcrypt password hashing, role, profilePicture)
│   └── blog.js                  # Blog schema (title, body, thumbnailUrl, createdBy)
│
├── routes/
│   ├── authRoute.js             # /signup, /login, /logout
│   └── blog.js                  # /home, /add-blog, /showMyBlogs, /blog/:id
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   ├── addBlog.ejs
│   ├── blogDetails.ejs
│   ├── showMyBlogs.ejs
│   └── partials/
│       ├── head.ejs
│       ├── nav.ejs
│       └── scripts.ejs
│
└── public/
    ├── images/                  # default profile picture, etc.
    └── uploads/                 # user-uploaded blog thumbnails (via Multer)



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
