# Fullstack Task Manager Application

A modern, scalable full-stack web application with authentication, dashboard, and CRUD operations. Built with React, Node.js, Express, and MongoDB.

## 🚀 Features

### Frontend
- ✅ **React 18** with Vite for fast development
- ✅ **TailwindCSS** for responsive, modern UI
- ✅ **React Router** for client-side routing
- ✅ **Protected Routes** - Login required for dashboard
- ✅ **Context API** for state management
- ✅ **Client-side validation** with real-time feedback
- ✅ **Lucide React** icons for beautiful UI

### Backend
- ✅ **Node.js + Express** RESTful API
- ✅ **MongoDB** with Mongoose ODM
- ✅ **JWT Authentication** for secure access
- ✅ **bcrypt** for password hashing
- ✅ **Server-side validation** with express-validator
- ✅ **Error handling** middleware
- ✅ **CORS** enabled for cross-origin requests

### Dashboard Features
- ✅ User profile management
- ✅ Task CRUD operations (Create, Read, Update, Delete)
- ✅ Search and filter tasks by status, priority
- ✅ Task statistics dashboard
- ✅ Responsive design for all devices
- ✅ Logout functionality

### Security
- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ Protected API routes with middleware
- ✅ Input validation on client and server
- ✅ Secure password requirements

## 📁 Project Structure

```
fullstack-app/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Auth logic
│   │   └── taskController.js     # Task CRUD logic
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   ├── errorHandler.js       # Error handling
│   │   └── validate.js           # Validation middleware
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Task.js               # Task schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   └── taskRoutes.js         # Task endpoints
│   ├── utils/
│   │   └── generateToken.js      # JWT token generator
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Entry point
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx        # Navigation bar
    │   │   ├── PrivateRoute.jsx  # Route protection
    │   │   ├── TaskCard.jsx      # Task display card
    │   │   └── TaskModal.jsx     # Task create/edit modal
    │   ├── context/
    │   │   ├── AuthContext.jsx   # Auth state management
    │   │   └── TaskContext.jsx   # Task state management
    │   ├── pages/
    │   │   ├── Login.jsx         # Login page
    │   │   ├── Signup.jsx        # Signup page
    │   │   ├── Dashboard.jsx     # Main dashboard
    │   │   └── Profile.jsx       # User profile
    │   ├── utils/
    │   │   └── api.js            # Axios instance
    │   ├── App.jsx               # Main app component
    │   ├── main.jsx              # Entry point
    │   └── index.css             # Global styles
    ├── .env.example
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    └── vite.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```


3. Start the backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```


3. Update `.env` with backend URL:
```env
VITE_API_URL=https://taskmanager-2-9syc.onrender.com/api

```

4. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Tasks
- `GET /api/tasks` - Get all tasks (protected, with filters)
- `GET /api/tasks/stats` - Get task statistics (protected)
- `GET /api/tasks/:id` - Get single task (protected)
- `POST /api/tasks` - Create new task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)

### Query Parameters for GET /api/tasks
- `status` - Filter by status (pending, in-progress, completed)
- `priority` - Filter by priority (low, medium, high)
- `search` - Search in title and description
- `sortBy` - Sort field (default: createdAt)
- `order` - Sort order (asc, desc)

## 🔐 Authentication Flow

1. User signs up or logs in
2. Backend validates credentials and returns JWT token
3. Frontend stores token in localStorage
4. Token is sent with every API request via Authorization header
5. Backend middleware verifies token before processing protected routes
6. Invalid/expired tokens redirect to login page

## 🎨 UI Features

- **Responsive Design** - Works on mobile, tablet, and desktop
- **Modern UI** - Clean, professional interface with TailwindCSS
- **Real-time Validation** - Instant feedback on form inputs
- **Loading States** - Spinners and disabled states during API calls
- **Error Handling** - User-friendly error messages
- **Success Feedback** - Confirmation messages for actions

## 🧪 Testing the Application

1. Start both backend and frontend servers
2. Open `http://localhost:3000` in your browser
3. Sign up with a new account
4. Create, edit, and delete tasks
5. Use filters and search functionality
6. Update your profile
7. Test logout and login again

## 🚀 Production Deployment

### Backend
1. Set `NODE_ENV=production` in environment
2. Use a secure `JWT_SECRET`
3. Use MongoDB Atlas for database
4. Deploy to services like Heroku, Railway, or DigitalOcean

### Frontend
1. Build the production bundle:
```bash
npm run build
```
2. Deploy `dist` folder to Vercel, Netlify, or any static hosting
3. Update `VITE_API_URL` to production backend URL

## 📝 Environment Variables


```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🔧 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🛡️ Security Best Practices

- ✅ Passwords are hashed with bcrypt (10 salt rounds)
- ✅ JWT tokens expire after 7 days
- ✅ Protected routes require valid JWT
- ✅ Input validation on both client and server
- ✅ CORS configured for security
- ✅ Sensitive data excluded from responses
- ✅ Environment variables for secrets

## 📚 Tech Stack

### Frontend
- React 18
- React Router DOM 6
- TailwindCSS 3
- Axios
- Lucide React (icons)
- Vite

### Backend
- Node.js
- Express 4
- MongoDB
- Mongoose 8
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- CORS
- dotenv

Built with ❤️ using React, Node.js, and MongoDB
