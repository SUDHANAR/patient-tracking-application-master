import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminServices from '../services/AdminServices';

import "./Login.css";


class DoctorLogin extends Component {
    state = {
        email: "",
        password: "",
        doctorLogin: [],
        loggedIn: '',
        alreadyLogged: ''
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    
    componentDidMount(){
        AdminServices.getDoctor().then((res) => {
            this.setState({ doctorLogin: res.data})
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        //console.log(res.data);
        this.state.doctorLogin.map((data) => {
            if (this.state.email[0] === data.doctorEmail && this.state.password[0] === data.password) {
                this.setState({
                    loggedIn: this.state.email[0]
                })
                localStorage.setItem('userNm', this.state.email[0])
                var user1 = localStorage.getItem('userNm');
               var notify =new Notification(`${this.state.email[0]} is successfully logged in....`)
                    window.location.href = '/doctorhome'
            }
            // else{
            //     setTimeout(() => {
            //         document.querySelector('#loginerrorid').classList.add('error-show')
            //         document.querySelector('#loginerrorid').classList.remove('error-hide')


            //     }, 2000);
            // }
        })


    }

    render() {

        return (
            <div className="Login">
                <h1 align="center">
          <span className="badge badge-dark" >Welcome to Doctor Login Page</span>
        </h1>
                <Form onSubmit={this.onSubmitHandler} className="form-style">
                    <Form.Group size="lg" controlId="email">
                        <Form.Label style={{color:'white'}}>Doctor Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onInputChange}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label style={{color:'white'}}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onInputChange}
                        />
                    </Form.Group>
                    {/* <div className="error-hide" id="loginerrorid">Invalid email or password</div> */}
                    <Button block size="lg" type="submit">
                        Login
                </Button>
                </Form>
            </div>
        );
    }
}

export default DoctorLogin

