import React, { Component } from 'react';
import '../../App.css';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";

export default class Login extends Component{

    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: '',
    }

    handleChange  = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit  = (event) => {
        event.preventDefault();
        const { username, password} = this.state
        axios({
            method: "POST",
            data: {
                username: username,
                password: password,
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
        })
            //This is probably not the best way to authenticate a user. A check on the status code would be better.
        .then(response => {
            console.log(response.data)
            const isAuthenticated = response.data.isAuthentiicated
            if (response.data === 'No User exists') {
                console.log(response.data)
            } else {
                //Need to store the user data in local storage
                Object.keys(response.data).forEach((item) => {
                    localStorage.setItem(item, response.data[item])
                });
                //This pushes you to the profile page on successful login.
                this.props.history.push('/profile');
                //This is how you store an array
                // localStorage.setItem('array', JSON.stringify(['Hello', 'Super']))
                // //This is how to retrieve array
                // var storedNames = JSON.parse(localStorage.getItem('array'));
                // console.log(response.data);
            }
        })
    };
    render() {
        // Use this code to redirect based on if user is logged in.
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if(isAuthenticated) {
            return <Redirect to='/profile'/>
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <input type="text" name="username" placeholder='username' onChange={this.handleChange}/>
                        <input type="password" name="password" placeholder='password' onChange={this.handleChange}/>
                        <button>Submit</button>
                    </form>
                    <Link to='/register'>
                        <h1>Register</h1>
                    </Link>
                </div>
            )
        }
    }

}
