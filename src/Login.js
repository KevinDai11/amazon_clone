import React, {useState} from 'react';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,email, password)
            .then((auth) => {
                history('/');
            })
            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email, password)
            .then((auth) => {
                if(auth){
                    history('/');
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type = "text" value = {email} onChange ={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type = "password" value = {password} onChange ={e => setPassword(e.target.value)}/>

                    <button onClick = {signIn} type = "submit" className='login__signInButton'>Sign In</button>
                </form>

                <p>By signing-in, you agree to the Conditions of Use and Privacy Notice</p>

                <button onClick={register} className="login__registerButton">Create an Account</button>
            </div>

        </div>
                    
    );
}


export default Login;