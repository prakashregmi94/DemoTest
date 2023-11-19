import React, {useState} from 'react'
import './form.css';
import { Link, useNavigate } from 'react-router-dom'
import axios  from 'axios'

function Signup() {
    const [loginValues, setLoginValues] = useState({
        username:'',
        password:''
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.post('http://localhost:8005/signup', loginValues)
        .then(res => 
            navigate('/'))
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginValues(prev => ({ ...loginValues, [name]: value }))
    }
    return (
        <div class = 'main-page'> 
            <form class = 'main-form' action='' onSubmit={handleSubmit} >
                <h2> Sign Up </h2>
                <div >
                    <label class = 'label'  htmlFor='text'>Username</label>
                    <input class = 'input' name = 'username' type = 'test' placeholder = 'Please Enter your username'
                    onChange={handleChange} />
                </div>     
                <div>
                    <label class = 'label' htmlFor='password'>Password</label>
                    <input class = 'input'  name = 'password' type = 'password' placeholder='Please Enter your password'
                    onChange={handleChange} />
                </div>

                <button class = 'button' type = 'submit' >Create Account</button>
                <Link to = '/' >Back to Login </Link>
            </form>    
         </div>
    )
}
export default Signup 

