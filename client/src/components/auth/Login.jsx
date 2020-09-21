import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const {email, password} = formData;
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <div>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
            <form onSubmit={e=> onSubmit(e)} className="form" action="dashboard.html">
                <div className="form-group">
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    value={email}
                    onChange={e=>onChange(e)}
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
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
