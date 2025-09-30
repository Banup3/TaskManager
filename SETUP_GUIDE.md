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

### Option B: MongoDB Atlas (Cloud - Recommended for beginners)

1. **Create free account:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free account
   - Create a new cluster (free tier)

2. **Get connection string:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/fullstack-app`

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

5. **Edit .env file:**
   Open `.env` in your text editor and update:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/fullstack-app
   # OR if using MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fullstack-app
   
   JWT_SECRET=my_super_secret_key_12345_change_this
   JWT_EXPIRE=7d
   NODE_ENV=development
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
   - You should see your dashboard with tasks

## Troubleshooting

### Backend Issues

**Problem: MongoDB connection error**
```
Solution:
- Verify MongoDB is running: net start MongoDB
- Check MONGODB_URI in .env is correct
- If using Atlas, check network access and password
```

**Problem: Port 5000 already in use**
```
Solution:
- Change PORT in backend/.env to different port (e.g., 5001)
- Update VITE_API_URL in frontend/.env accordingly
```

**Problem: JWT error**
```
Solution:
- Make sure JWT_SECRET is set in backend/.env
- Clear localStorage in browser and login again
```

### Frontend Issues

**Problem: Cannot connect to backend**
```
Solution:
- Verify backend is running on http://localhost:5000
- Check VITE_API_URL in frontend/.env
- Check browser console for CORS errors
```

**Problem: Port 3000 already in use**
```
Solution:
- Vite will automatically suggest next available port
- Or kill process using port 3000
```

**Problem: Blank page or errors**
```
Solution:
- Check browser console for errors
- Verify all npm packages installed correctly
- Try: npm install --force
- Clear browser cache
```

### Common Errors

**Error: "Module not found"**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: "Cannot find module 'dotenv'"**
```bash
# Make sure you're in correct directory
cd backend  # or cd frontend
npm install
```

**Error: "Invalid token" or "Not authorized"**
```javascript
// Clear browser localStorage
// In browser console:
localStorage.clear()
// Then login again
```

## Development Workflow

### Starting Development

1. **Start MongoDB** (if local)
2. **Terminal 1 - Backend:**
   ```powershell
   cd backend
   npm run dev
   ```
3. **Terminal 2 - Frontend:**
   ```powershell
   cd frontend
   npm run dev
   ```

### Stopping Development

1. Press `Ctrl+C` in both terminal windows
2. Stop MongoDB service (if needed)

## Next Steps

- ✅ Read the main README.md for detailed documentation
- ✅ Check backend/README.md for API documentation
- ✅ Explore the code structure
- ✅ Try adding new features
- ✅ Deploy to production (see README.md)

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

### MongoDB Commands
```powershell
net start MongoDB    # Start MongoDB service
net stop MongoDB     # Stop MongoDB service
mongosh              # Open MongoDB shell
```

## Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review error messages carefully
3. Check browser console for frontend errors
4. Check terminal for backend errors
5. Verify all environment variables are set correctly

## Success Checklist

- [ ] MongoDB is running and connected
- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 3000
- [ ] Can sign up new user
- [ ] Can login with credentials
- [ ] Can create, edit, delete tasks
- [ ] Can update profile
- [ ] Can logout and login again

If all items are checked, congratulations! 🎉 Your fullstack application is running successfully!
