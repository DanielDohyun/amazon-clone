import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
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
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="text" />
                    <button>Sign In</button>
                </form>

                <p>
                    This is Daniel Kim's Amazon clone.
                    By signing-in you agree to the Amazon clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to='/register'>
                    <button className='login__registerButton'>Create your Amazon Account</button>
                </Link>

            </div>
        </div>
    )
}

export default Login;
