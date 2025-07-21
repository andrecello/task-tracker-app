function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    console.log('Token removed - user logged out!');
    
    // Call parent component's logout handler
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <button 
      onClick={handleLogout}
      style={{ 
        padding: '10px 20px', 
        backgroundColor: '#dc3545', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer',
        fontSize: '14px',
        marginLeft: '10px'
      }}
    >
      Logout 🚪
    </button>
  );
}

export default LogoutButton;