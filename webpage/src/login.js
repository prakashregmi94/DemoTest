import React, {useState} from 'react'
import './form.css';
import { Link } from 'react-router-dom'

function Login() {
    const [loginValues, setLoginValues] = useState({
        username:'',
        password:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginValues(prev => ({ ...loginValues, [name]: value }))
    }
    return (
        <div class = 'main-page'> 
            <form class = 'main-form' action='' onSubmit={handleSubmit}>
            <h2> Sign In </h2>
                <div>
                    <label class = 'label' htmlFor='text'>Username</label>
                    <input class = 'input' name = 'name' type = 'text' placeholder = 'Please Enter your username'
                    onChange={handleChange}         
                    />
                </div>
                <div>
                    <label  class = 'label' htmlFor='password'>Password</label>
                    <input  class = 'input' name = 'password' type = 'password' placeholder = 'Please Enter your Password'
                    onChange={handleChange}
                    />
                </div>
                <button class = 'button'type = 'submit'>Login</button>
                <Link to='/signup'>Create Account</Link>
            </form>    
         </div>
    )
}
export default Login 
