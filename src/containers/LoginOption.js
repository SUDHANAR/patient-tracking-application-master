import React, { Component } from 'react';
import Particles from 'react-particles-js';


export class LoginOption extends Component {
    constructor(props) {
        super(props)

        this.adminLogin= this.adminLogin.bind(this);
        this.doctorLogin = this.doctorLogin.bind(this);
       
    }

    adminLogin()
    {
        window.location.href='/login'
    }
    doctorLogin()
    {
        window.location.href='/doctorlogin'
    }
    
    render() {
        return (

            <div>
            <Particles
      params={{
        particles:{
          number:{
            value: 40,
            density:{
              enable: true,
              value_area:900
            }
          }
        }
      }} />

            <div className="Login">
            <div className="main-info">
            <h1>Welcome to patient tracking system</h1>
            {/* <Typed 
                className="typed-text"
                strings={["We will take care of your health"]}
                typeSpeed={40}
                loop
             /> */}
            <button  onClick={() => this.adminLogin()} className="btn-main-offer">Admin Login</button>
                <button  onClick={() => this.doctorLogin()} className="btn-main-offer">Doctor Login </button>
            </div>
            
        </div>



        </div>
        )
    }
}

export default LoginOption