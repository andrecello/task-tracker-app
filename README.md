# QuickTask 📝

A modern, full-stack task management application built with React and Express.js, featuring real-time task creation and management with MongoDB integration.

## 🚀 Features

- ✅ Create and manage tasks in real-time
- 🔄 Persistent data storage with MongoDB
- 📱 Responsive and modern UI
- ⚡ Fast development with Vite
- 🎨 Clean, intuitive interface

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting
- **Git** - Version control
- **npm** - Package management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### 1. Clone the repository
```bash
git clone https://github.com/andrecello/task-tracker-app.git
cd task-tracker-app
```

### 2. Backend Setup
```bash
cd server
npm install

# Create .env file
echo "MONGO_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env

# Start the server
npm start
```

### 3. Frontend Setup
```bash
cd ../client
npm install

# Start the development server
npm run dev
```

### 4. Access the Application
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## 🔧 Environment Variables

Create a `.env` file in the `server` directory:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/tasktracker
PORT=5000
```

## 📁 Project Structure

```
task-tracker/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express.js backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Server entry point
│   └── package.json
└── README.md
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |

## 🧑‍💻 Author

**Andre Cello**
- GitHub: [@andrecello](https://github.com/andrecello)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔮 Future Enhancements

- [ ] Task editing functionality
- [ ] Task deletion from database
- [ ] Task categories and filtering
- [ ] User authentication
- [ ] Due dates and reminders
- [ ] Dark mode toggle

---

*Built with ❤️ using modern web technologies*
