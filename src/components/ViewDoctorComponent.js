import React, { Component } from 'react'
import AdminServices from '../services/AdminServices'


class ViewDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dId: this.props.match.params.dId,
            doctor: {}
        }
    }

    Home() {
        window.location.href = '/home'
    }

    componentDidMount(){
        AdminServices.getDocById(this.state.dId).then( res => {
            this.setState({doctor: res.data});
        })
    }

    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>
                
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Doctor Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Doctor Name: </label>
                            <div> { this.state.doctor.dName }</div>
                        </div>
                        <div className = "row">
                            <label> Doctor Specialization: </label>
                            <div> { this.state.doctor.specialization }</div>
                        </div>
                        <div className = "row">
                            <label>Doctor Email: </label>
                            <div> { this.state.doctor.doctorEmail }</div>
                        </div>
                        <div className = "row">
                            <label>Doctor Password: </label>
                            <div> { this.state.doctor.password }</div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        )
    }
}

export default ViewDoctorComponent