import { useState } from 'react'
import SignUp from './signUp.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100vw',
      height:'100vh',
      backgroundColor:'#e0e0e0',
      overflow:'hidden',
    }}>
      <SignUp />
    </div>
  )
}

export default App
