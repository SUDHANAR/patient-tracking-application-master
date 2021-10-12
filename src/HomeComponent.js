import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';



export class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.Home = this.Home.bind(this);


    }

    Home() {
        window.location.href = '/'
    }
    render() {
        return (
<div>
            
      
            <div className="customBackground">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Log Out</button>
            <div className="linkOption">
            
                <ul>
                
                <li><Link to="/patients"> Patient Details</Link></li>
                <li><Link to="/admins">Admins</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                {/* <li><Link to="/customers"> Customers</Link></li> */}
                </ul>
            </div>
            </div>
            </div>
        )
    }
}

export default HomeComponent
