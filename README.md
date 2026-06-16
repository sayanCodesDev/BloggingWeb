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

BloggingWeb/<br>
├── app.js                    # App entry point — sets up Express, EJS, DB, routes<br>
├── connect.js                # MongoDB connection (mongoose.connect)<br>
├── package.json<br>
│<br>
├── controllers/<br>
│   ├── authControl.js        # handleUserSignup, handleUserLogin<br>
│   └── index.js              # handleBlogSubmission<br>
│<br>
├── middlewares/<br>
│   └── auth.js               # checkForAuthentication — verifies JWT cookie<br>
│<br>
├── services/<br>
│   └── authen.js             # setUser (sign JWT), getUser (verify JWT)<br>
│<br>
├── models/<br>
│   ├── userAuth.js           # User schema (bcrypt password hashing, role, profilePicture)<br>
│   └── blog.js               # Blog schema (title, body, thumbnailUrl, createdBy)<br>
│<br>
├── routes/<br>
│   ├── authRoute.js          # /signup, /login, /logout<br>
│   └── blog.js               # /home, /add-blog, /showMyBlogs, /blog/:id<br>
│<br>
├── views/<br>
│   ├── home.ejs<br>
│   ├── login.ejs<br>
│   ├── signup.ejs<br>
│   ├── addBlog.ejs<br>
│   ├── blogDetails.ejs<br>
│   ├── showMyBlogs.ejs<br>
│   └── partials/<br>
│       ├── head.ejs<br>
│       ├── nav.ejs<br>
│       └── scripts.ejs<br>
│<br>
└── public/<br>
    ├── images/               # default profile picture, etc.<br>
    └── uploads/              # user-uploaded blog thumbnails (via Multer)<br>



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
