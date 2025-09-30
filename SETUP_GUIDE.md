# Complete Setup Guide

Step-by-step guide to get the fullstack application running on your machine.

## Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js v16+ installed (`node --version`)
- ✅ npm installed (`npm --version`)
- ✅ MongoDB installed or MongoDB Atlas account
- ✅ Git (optional, for version control)

## Step 1: MongoDB Setup

### Option A: Local MongoDB (Windows)

1. **Download MongoDB Community Server:**
   - Visit https://www.mongodb.com/try/download/community
   - Download Windows installer
   - Run installer with default settings

2. **Start MongoDB:**
   ```powershell
   # MongoDB should start automatically as a service
   # To verify it's running:
   net start MongoDB
   ```

3. **Verify MongoDB is running:**
   ```powershell
   # Open MongoDB shell
   mongosh
   # You should see a connection message
   ```

## Step 2: Backend Setup

1. **Open terminal in project root:**
   ```powershell
   cd C:\Users\banup\CascadeProjects\fullstack-app
   ```

2. **Navigate to backend:**
   ```powershell
   cd backend
   ```

3. **Install dependencies:**
   ```powershell
   npm install
   ```
   This will install: express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv, express-validator, nodemon

4. **Create .env file:**
   ```powershell
   copy .env.example .env
   ```

6. **Start backend server:**
   ```powershell
   npm run dev
   ```

7. **Verify backend is running:**
   - You should see: `✅ MongoDB Connected: ...`
   - And: `🚀 Server running in development mode on port 5000`
   - Open browser: http://localhost:5000
   - You should see API info JSON

## Step 3: Frontend Setup

1. **Open NEW terminal window** (keep backend running)

2. **Navigate to frontend:**
   ```powershell
   cd C:\Users\banup\CascadeProjects\fullstack-app\frontend
   ```

3. **Install dependencies:**
   ```powershell
   npm install
   ```
   This will install: react, react-dom, react-router-dom, axios, lucide-react, tailwindcss, vite

4. **Create .env file:**
   ```powershell
   copy .env.example .env
   ```

5. **Edit .env file:**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

6. **Start frontend server:**
   ```powershell
   npm run dev
   ```

7. **Verify frontend is running:**
   - You should see: `Local: http://localhost:3000/`
   - Browser should open automatically
   - If not, open: http://localhost:3000

## Step 4: Test the Application

1. **Sign Up:**
   - Click "Sign up" link
   - Enter name, email, password
   - Click "Sign Up" button
   - You should be redirected to dashboard

2. **Create a Task:**
   - Click "New Task" button
   - Fill in task details
   - Click "Create Task"
   - Task should appear in the list

3. **Test Filters:**
   - Use search box to search tasks
   - Filter by status and priority
   - Click "Clear" to reset filters

4. **Edit Task:**
   - Click edit icon on a task
   - Update details
   - Click "Update Task"

5. **Delete Task:**
   - Click delete icon on a task
   - Confirm deletion

6. **Update Profile:**
   - Click "Profile" in navbar
   - Update your name, bio, or password
   - Click "Save Changes"

7. **Logout:**
   - Click logout icon in navbar
   - You should be redirected to login page

8. **Login:**
   - Enter your email and password
   - Click "Sign In"
   - You should see your dashboard with task



## Quick Reference

### Backend Commands
```powershell
cd backend
npm install          # Install dependencies
npm run dev          # Start development server
npm start            # Start production server
```

### Frontend Commands
```powershell
cd frontend
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```


