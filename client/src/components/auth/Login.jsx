import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const history = useHistory();
    toast.configure()
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = data;

    const onChange = (e)=>{
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async(e)=> {
        e.preventDefault();
        try {
            const header = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            const body = JSON.stringify(data)
            await axios.post('/api/auth', body, header);
            toast('User Logged in Successfully');
            history.push('/dashboard');
            
        } catch (error) {
            toast(error.response.data.errors[0].message)
        }
    }

    return (
        <div>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
            <form onSubmit={(e)=> onSubmit(e)} className="form" action="dashboard.html">
                <div className="form-group">
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    value={email}
                    onChange={(e)=> onChange(e)}
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e)=> onChange(e)}
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="register.html">Sign Up</Link>
            </p>
        </div>
    )
}

export default Login
