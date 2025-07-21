import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>QuickTask 📝 - Authentication</h1>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;