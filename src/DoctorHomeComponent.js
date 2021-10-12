import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
 

export class DoctorHomeComponent extends Component {
    constructor(props) {
        super(props)

        this.Home= this.Home.bind(this);
        
       
    }

    Home()
    {
        window.location.href='/'
    }
    render() {
        return (
            <div className="customBackground">
                <button style={{ marginLeft: "10px" }} onClick={() => this.DoctorHome()} className="btn btn-primary">Log Out</button>
            <div className="linkOption">
                <ul>
                 <li><Link to="/patients">Patient Details</Link></li>
                 <li><Link to="/phistory"> Patient History</Link></li> 
                </ul>
            </div>
            </div>
        )
    }
}

export default DoctorHomeComponent
