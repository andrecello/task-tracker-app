import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    
    // Update the document
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    
    // Save preference
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    console.log(`Switched to ${newTheme ? 'dark' : 'light'} mode`);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;