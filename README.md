# QuickTask 📝

A full-stack task management application built with modern web technologies. Users can register, login, and manage their personal tasks with complete CRUD functionality.

## ✨ Features

- 🔐 **User Authentication** - Secure registration and login system
- 📝 **Task Management** - Create, view, and delete personal tasks
- 🔒 **User Isolation** - Each user only sees their own tasks
- 💾 **Data Persistence** - Tasks saved in MongoDB database
- 🚀 **Real-time Updates** - Instant UI updates on task operations
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🔑 **JWT Authentication** - Secure token-based authentication

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Responsive styling with inline styles

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - Elegant MongoDB object modeling
- **JWT (jsonwebtoken)** - Secure authentication tokens
- **bcryptjs** - Password hashing for security

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/andrecello/task-tracker-app.git
cd task-tracker-app
```

2. **Backend Setup**
```bash
cd server
npm install

# Start the backend server
npm start
```

3. **Frontend Setup**
```bash
cd ../client
npm install

# Start the development server
npm run dev
```

4. **Access the Application**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## 🔧 Environment Variables

Create a `.env` file in the `server` directory:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/tasktracker
PORT=5000
JWT_SECRET=your_super_secret_jwt_key
```

## 📁 Project Structure

```
task-tracker/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── LoginForm.jsx      # User login form
│   │   │   ├── RegisterForm.jsx   # User registration form
│   │   │   ├── LogoutButton.jsx   # Logout functionality
│   │   │   └── TaskList.jsx       # Task management interface
│   │   ├── App.jsx           # Main application component
│   │   └── main.jsx          # Application entry point
│   ├── package.json
│   └── vite.config.js
├── server/                   # Express.js backend
│   ├── models/              # MongoDB models
│   │   ├── User.js              # User schema
│   │   └── Task.js              # Task schema
│   ├── routes/              # API routes
│   │   ├── auth.js              # Authentication endpoints
│   │   └── tasks.js             # Task management endpoints
│   ├── middleware/          # Custom middleware
│   │   └── auth.js              # JWT authentication middleware
│   ├── server.js            # Server entry point
│   └── package.json
└── README.md
```

## 🌐 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |

### Tasks
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/tasks` | Get user's tasks | Yes |
| POST | `/api/tasks` | Create new task | Yes |
| DELETE | `/api/tasks/:id` | Delete task | Yes |

## 🔒 Authentication Flow

1. **Registration**: User creates account with email/password
2. **Login**: User receives JWT token upon successful authentication
3. **Token Storage**: Frontend stores JWT in localStorage
4. **Protected Requests**: All task operations include JWT in Authorization header
5. **User Isolation**: Backend filters tasks by authenticated user's ID

## 💻 Usage

1. **Register**: Create a new account with your email and password
2. **Login**: Sign in to access your personal task dashboard
3. **Create Tasks**: Add new tasks using the input form
4. **View Tasks**: See all your tasks in a clean, organized list
5. **Delete Tasks**: Remove completed or unwanted tasks
6. **Logout**: Securely sign out and clear your session

## 🎯 Future Enhancements

- [ ] Task editing functionality
- [ ] Task completion status (done/pending)
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Search and filtering
- [ ] Dark mode support
- [ ] Mobile app version

## 🧑‍💻 Author

**Andre Cello**
- GitHub: [@andrecello](https://github.com/andrecello)
- Project: [Task Tracker App](https://github.com/andrecello/task-tracker-app)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, Express.js, and MongoDB**