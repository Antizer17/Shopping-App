import { useState } from 'react'
import SignUp from './signUp.jsx'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext, AuthProvider} from './Authcontext.jsx'
import  Login from './login.jsx'
import ProductPage from './products.jsx'

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext)
  return(
    <nav style={{display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      width:'100%',
      height:'10%',
      backgroundColor:'#333',
    }}>
      <Link to="/">Home</Link>
      {user.isAuth ? <p style={{color:'white'}}>Welcome {user.name}</p> : <div style={{display:'flex', gap:'1rem'}}><Link to="/login">Login</Link> <Link to="/signup">Sign Up</Link></div> }
      {user.isAuth ? <button onClick={() => logoutUser()} style={{padding:'0.5rem', borderRadius:'5px'}}>Logout</button> : null}
      
    </nav>
  )
}

function HomePage() {
  const {user} = useContext(AuthContext)

  return (
    <div style={{display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'100%',
    }}>
      <h1>Welcome {user.name} to the best Ecommerce Platform on planet Earth</h1>
    </div>
  )
}


function App() {
 
  return (
    <div style={{display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      width:'100vw',
      height:'100vh',
      backgroundColor:'#e0e0e0',
      overflow:'hidden',
    }}>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/products' element={<ProductPage />} />
      </Routes>
      </AuthProvider>

    </div>
  )
}

export default App
