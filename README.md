# HabitFlow – Habit & Daily Task Tracker

HabitFlow is a full-stack web application that helps users build good habits and manage
their daily tasks. It was built as a portfolio project to demonstrate practical,
job-ready full-stack development skills — authentication, CRUD operations, REST APIs,
MongoDB, React component design, and a clean, responsive UI.

---

## Table of Contents

- [Project Introduction](#project-introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Folder Structure](#folder-structure)
- [Installation Steps](#installation-steps)
- [API Overview](#api-overview)
- [Future Improvements](#future-improvements)

---

## Project Introduction

HabitFlow lets each user create an account and privately track their own habits and
tasks. On registration, the app automatically creates 8 starter habits (like "Drink
Water" and "Practice Coding") so the user has something to interact with right away.
From there, users can add unlimited custom habits and tasks, mark them complete, track
their daily streak, and view simple analytics of their progress over time.

## Features

**Authentication**
- Register, Login, Logout
- Passwords hashed with bcrypt
- JWT-based session handling
- Each user can only access their own data

**Landing Page**
- Hero section, Features, Why Choose HabitFlow, Screenshots preview, Contact section, Footer
- Light fade-in animations

**Dashboard**
- Welcome message + current date
- Today's progress bar
- Total / Completed / Pending habits
- Total tasks
- Current streak
- Daily motivational quote

**Habits**
- Add / Edit / Delete / Mark Complete / Mark Pending
- Fields: name, description, category, priority, repeat (Daily/Weekly)
- 8 default habits created automatically on signup

**Tasks**
- Add / Edit / Delete / Mark Complete / Mark Pending
- Fields: title, description, deadline, priority, category

**Search & Filters**
- Search habits and tasks by name
- Filter by category
- Filter by completed / pending status

**Analytics**
- Weekly progress bar chart (Recharts)
- Completion percentage
- Monthly completed count

**Profile**
- View/update name and profile picture
- View total habits, total tasks, current streak

**Settings**
- Dark mode toggle (persisted per user)
- Change password
- Delete account

**UI**
- White / Indigo / Blue color palette
- Rounded cards, soft shadows, hover effects
- Fully responsive (mobile, tablet, desktop)
- Dark mode support throughout

## Technology Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Recharts (analytics chart)
- React Icons

**Backend**
- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs

**Database**
- MongoDB with Mongoose

## Folder Structure

```
habitflow/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Register, login, profile, password, delete account
│   │   ├── habitController.js    # Habit CRUD + streak logic
│   │   ├── taskController.js     # Task CRUD
│   │   └── analyticsController.js# Dashboard summary + progress charts
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT route protection
│   │   └── errorMiddleware.js    # Centralized error handling
│   ├── models/
│   │   ├── User.js
│   │   ├── Habit.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── habitRoutes.js
│   │   ├── taskRoutes.js
│   │   └── analyticsRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TopNavbar.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── HabitCard.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── Modal.jsx
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Habits.jsx
│   │   │   ├── Tasks.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Settings.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── .env.example
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
└── README.md
```

## Installation Steps

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local install, or a free MongoDB Atlas cluster)

### 1. Clone / Extract the Project
Extract the project folder and open it in your code editor.

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and set your own values:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/habitflow
JWT_SECRET=your_own_secret_key
JWT_EXPIRES_IN=7d
```

Start the backend server:

```bash
npm run dev
```

The API will run at `http://localhost:5000`.

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
cp .env.example .env
```

Make sure `.env` points to your backend:

```
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The app will run at `http://localhost:3000`.

### 4. Try It Out
1. Open `http://localhost:3000` in your browser
2. Click "Get Started" to register a new account
3. You'll be logged in automatically with 8 default habits already created
4. Explore the Dashboard, Habits, Tasks, Analytics, Profile, and Settings pages

## API Overview

| Method | Endpoint                       | Description                    | Auth Required |
|--------|---------------------------------|---------------------------------|----------------|
| POST   | /api/auth/register              | Register a new user            | No             |
| POST   | /api/auth/login                 | Login                          | No             |
| GET    | /api/auth/profile               | Get logged-in user's profile   | Yes            |
| PUT    | /api/auth/profile               | Update profile                 | Yes            |
| PUT    | /api/auth/change-password       | Change password                | Yes            |
| DELETE | /api/auth/delete-account        | Delete account                 | Yes            |
| GET    | /api/habits                     | Get habits (search/filter)     | Yes            |
| POST   | /api/habits                     | Create a habit                 | Yes            |
| PUT    | /api/habits/:id                 | Update a habit                 | Yes            |
| DELETE | /api/habits/:id                 | Delete a habit                 | Yes            |
| PUT    | /api/habits/:id/toggle          | Toggle habit complete/pending  | Yes            |
| GET    | /api/tasks                      | Get tasks (search/filter)      | Yes            |
| POST   | /api/tasks                      | Create a task                  | Yes            |
| PUT    | /api/tasks/:id                  | Update a task                  | Yes            |
| DELETE | /api/tasks/:id                  | Delete a task                  | Yes            |
| PUT    | /api/tasks/:id/toggle           | Toggle task complete/pending   | Yes            |
| GET    | /api/analytics/dashboard        | Dashboard summary stats        | Yes            |
| GET    | /api/analytics/progress         | Weekly chart + completion %    | Yes            |

## Future Improvements

- Add reminder notifications for upcoming task deadlines
- Add a calendar/heatmap view of habit completion history (like GitHub's contribution graph)
- Allow habit reordering via drag-and-drop
- Add pagination for users with a very large number of habits/tasks
- Add unit and integration tests (Jest + React Testing Library)
- Add "forgot password" email flow

---

Built as a personal portfolio project to demonstrate full-stack development skills for
job interviews.
