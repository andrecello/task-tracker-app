import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import LogoutButton from './components/LogoutButton';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in when app loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('User logged out!');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('User logged in!');
  };

  if (isLoggedIn) {
    // Show logged in view with tasks
    return (
      <div className="App">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <h1>QuickTask 📝 - Dashboard</h1>
          <LogoutButton onLogout={handleLogout} />
        </div>
        
        <TaskList />
      </div>
    );
  }

  // Show login/register forms
  return (
    <div className="App">
      <h1>QuickTask 📝 - Authentication</h1>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <RegisterForm />
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}

export default App;