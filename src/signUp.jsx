import { useForm } from 'react-hook-form'

function SignUp(){
    const { register, handleSubmit, formState:{errors} } = useForm()
    const onSubmission = (data) => {
        alert(`Email: ${data.email}, Password: ${data.password}`)
    }

    return(
        <div style={{border:'2px solid black',
        padding:'20px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'300px',
        height:'400px',
        margin:'20px auto',
        borderRadius:'10px',
        backgroundColor:'#f0f0f0',

        }}>
            <h2 style={{color:'black'}}>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmission)} style={{display:'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            alignItems:'center',

            width:'90%',
            height:'50%',

            }}>
                <input {...register('email', { required: 'Email is required', minLength: {value:6,message:'Email must be at least 6 characters long!'}})} style={{padding:'1rem', borderRadius:'5px'}} type="email" placeholder="Email" />
                {errors.email && (<p style={{color:'red'}}>{errors.email.message}</p>)}
                <input {...register('password', { required: 'Password is required',maxLength:{value:20, message: 'Password must not exceed 20 characters!'}, minLength: { value: 6, message: 'Password must be at least 6 characters long!' } })} style={{padding:'1rem', borderRadius:'5px'}} type="password" placeholder="Password" />
                {errors.password && (<p style={{color:'red'}}>{errors.password.message}</p>)}
                <button style={{padding:'1rem', borderRadius:'5px'}} type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignUp