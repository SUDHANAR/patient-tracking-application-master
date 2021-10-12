import React, { Component } from 'react'
import AdminServices from '../services/AdminServices'


class ViewTreatmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pId: this.props.match.params.pId,
            patient: {},
            // treatmentHistory:{}
        }
    }

    Home() {
        window.location.href = '/home'
    }

    componentDidMount(){
        AdminServices.getPatientById(this.state.pId).then( res => {
            console.log(res.data);
            this.setState({patient: res.data});
        })
    }

    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>
                
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Treatment Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Patient Name: </label>
                            <div> { this.state.patient.pName }</div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.patient.gender }</div>
                        </div>
                        <div className = "row">
                            <label>Age: </label>
                            <div> { this.state.patient.age }</div>
                        </div>
                        <div className = "row">
                            <label>Contact: </label>
                            <div> { this.state.patient.contact }</div>
                        </div>
                        <div className = "row">
                            <label>Address: </label>
                            <div> { this.state.patient.address }</div>
                        </div>
                        <div className = "row">
                            <label>Date Of Arrival: </label>
                            <div> { this.state.patient.dateOfArrival }</div>
                        </div>
                        <div className = "row">
                            <label> Treatment Cost: </label>
                            <div> { this.state.patient.treatmentCost }</div>
                        </div>
                        <div className = "row">
                            <label>Medication: </label>
                            <div> { this.state.patient.consultation }</div>
                        </div>
                        <div className = "row">
                            <label>Disease: </label>
                            <div> { this.state.patient.disease}</div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        )
    }
}

export default ViewTreatmentComponent