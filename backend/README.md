# Backend API Documentation

RESTful API for the Fullstack Task Manager application.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
copy .env.example .env

# Update .env with your MongoDB URI and JWT secret

# Start development server
npm run dev
```

## API Base URL
```
http://localhost:5000/api
```

## Authentication

All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Auth Routes

#### POST /api/auth/signup
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "",
  "bio": "",
  "token": "jwt_token_here"
}
```

#### POST /api/auth/login
Login existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:** Same as signup

#### GET /api/auth/me
Get current user profile (Protected).

**Response:**
```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "",
  "bio": "",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### PUT /api/auth/profile
Update user profile (Protected).

**Request Body:**
```json
{
  "name": "John Updated",
  "bio": "My bio",
  "avatar": "https://example.com/avatar.jpg",
  "password": "newpassword123" // optional
}
```

### Task Routes (All Protected)

#### GET /api/tasks
Get all tasks for current user with optional filters.

**Query Parameters:**
- `status` - Filter by status (pending, in-progress, completed)
- `priority` - Filter by priority (low, medium, high)
- `search` - Search in title and description
- `sortBy` - Sort field (default: createdAt)
- `order` - Sort order (asc, desc)

**Example:**
```
GET /api/tasks?status=pending&priority=high&search=meeting
```

**Response:**
```json
{
  "count": 2,
  "tasks": [
    {
      "_id": "...",
      "title": "Complete project",
      "description": "Finish the fullstack app",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-12-31T00:00:00.000Z",
      "user": "...",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

#### GET /api/tasks/stats
Get task statistics for current user.

**Response:**
```json
{
  "total": 10,
  "pending": 3,
  "in-progress": 4,
  "completed": 3
}
```

#### GET /api/tasks/:id
Get single task by ID.

#### POST /api/tasks
Create new task.

**Request Body:**
```json
{
  "title": "New Task",
  "description": "Task description",
  "status": "pending",
  "priority": "medium",
  "dueDate": "2024-12-31"
}
```

#### PUT /api/tasks/:id
Update existing task.

**Request Body:** Same as POST (all fields optional)

#### DELETE /api/tasks/:id
Delete task.

**Response:**
```json
{
  "message": "Task deleted successfully"
}
```

## Error Responses

All errors follow this format:
```json
{
  "message": "Error message here",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (not authorized for resource)
- `404` - Not Found
- `500` - Internal Server Error

## Validation Rules

### User
- Name: 2-50 characters, required
- Email: Valid email format, required, unique
- Password: Minimum 6 characters, required
- Bio: Maximum 500 characters, optional

### Task
- Title: Maximum 100 characters, required
- Description: Maximum 500 characters, optional
- Status: One of [pending, in-progress, completed]
- Priority: One of [low, medium, high]
- Due Date: Valid ISO date, optional
