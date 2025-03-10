import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  )

  const handleLogin = (email, password) => {
    // In a real app, you would validate credentials against a backend
    if (email && password) {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', email)
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    setIsAuthenticated(false)
  }

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route 
        path="/login" 
        element={
          isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Login onLogin={handleLogin} />
        } 
      />
      <Route 
        path="/dashboard/*" 
        element={
          isAuthenticated ? 
            <Dashboard onLogout={handleLogout} /> : 
            <Navigate to="/login" />
        } 
      />
      <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
    </Routes>
  )
}

export default App