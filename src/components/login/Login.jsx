import React, { useState } from 'react';
import { observer } from 'mobx-react'
import user from '../../store/user';

const Login = observer(() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="form_inner">
                <h3 className="form-title">Login</h3>
                <p className="form-text">Email</p>

                <input
                    className='form-input'
                    placeholder='Введите email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p className="form-text">Password</p>

                <input
                    className='form-input'
                    placeholder='Введите password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="btn"
                    onClick={() => { user.login(email, password) }}
                    type='button'>
                    Login
                </button>
            </div>
        </>
    );
})

export default Login;