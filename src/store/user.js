import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import $api from '../http'

class User {
    isLogin = false
    constructor() {
        makeAutoObservable(this)
    }

    setIsLogin(isLogin) {
        this.isLogin = isLogin;
    }

    login(email, password) {
        axios.post('http://127.0.0.1:8000/api/auth/login', {
            email: email,
            password: password,
        })
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.isLogin = true
            })
            .catch(error => {
                console.log("register_ERROR", error);
            })

    }

    register(name, email, password) {
        axios.post(' http://127.0.0.1:8000/api/auth/registration', {
            name: name,
            email: email,
            password: password
        })
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.isLogin = true
            })
            .catch(error => {
                console.log("register_ERROR", error);
            })
    }

    async logout() {
        $api.post('auth/logout')
            .then(response => {
                localStorage.removeItem('token')
                this.isLogin = false
            })
            .catch(error => {
                console.log("error", error);
            })
    }
}

export default new User()