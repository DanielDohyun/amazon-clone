import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.scss';

function Login() {
    //redirect 
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //redirect to homepage
                history.push('/');

            })
            .catch(e => alert(e.message));
        
    };

    const register = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            
            })
            .catch(e => alert(e.message));

    };

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png
                " alt="amazon logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    This is Daniel Kim's Amazon clone.
                    By signing-in you agree to the Amazon clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to='/register'>
                    <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                </Link>

            </div>
        </div>
    )
}

export default Login;
