import React, { useContext } from 'react'
import {AuthContext} from './Authcontext.jsx'     


function Login() {
  const {user, loginUser} = useContext(AuthContext)
  function handleSubmit(e){
    e.preventDefault()
    loginUser('Sameer', 25)
  }

  return (
    <div style={{display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'100%',
    }}>
      <form style={{display:'flex',
        flexDirection:'column',       
        justifyContent:'center',
        alignItems:'center',
        width:'300px',
        height:'400px',
        border:'2px solid black',
        borderRadius:'10px',
        backgroundColor:'#f0f0f0',

      }}>
        <h2 style={{color:'black'}}>Login</h2>
        <input style={{padding:'1rem', borderRadius:'5px'}} type="email" placeholder="Email" />
        <input style={{padding:'1rem', borderRadius:'5px'}} type="password" placeholder="Password" />
        <button onClick={(e) => handleSubmit(e)} style={{padding:'1rem', borderRadius:'5px'}} type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Login