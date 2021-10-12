import React, { Component } from 'react'
import AdminServices from '../services/AdminServices';

class ListPatientDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patient: []
        }
        this.Home= this.Home.bind(this);
        this.addPatient = this.addPatient.bind(this);
        
    }
    Home()
    {
        window.location.href='/home'
    }

    addPatient(){
        this.props.history.push('/add-patient/_add')
    }
    viewPatient(pId){
        this.props.history.push(`/view-patient/${pId}`);
    }
    
    componentDidMount() {
        AdminServices.getPatient().then((res) => {
             this.setState({patient: res.data});

        });
        
    }

    // addCar() {
    //     window.location.href='/add-car/_add'
    // }

    render() {
        return (
            <div className="customBackground">
            <div className="container">
                  
                <h2 className="text-center">Patients List</h2>
                <div className="row">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                <button className="btn btn-primary" style={{ marginLeft: "10px" }}onClick={this.addPatient}> Add Patient</button>
                  
                </div>
                <br></br>
                <div className="row">
                    <table  className="table table-striped table-bordered table-dark">

                        <thead>
                            <tr>
                                <th>Patient Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Contact No</th>
                                <th>Address</th>
                               

                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.patient.map(
                                    patient =>
                                        <tr key={patient.pId}>
                                            <td> {patient.pId}</td>
                                            <td> {patient.pName} </td>
                                            <td> {patient.gender} </td>
                                            <td> {patient.age} </td>
                                            <td> {patient.contact} </td>
                                            <td> {patient.address} </td>


                                            <td><button style={{ marginLeft: "10px" }} onClick={() => this.editPatient(patient.pId)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletePatient(patient.pId)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewPatient(patient.pId)} className="btn btn-info">View</button>
                                            </td>
                                            
                                        </tr>
                                            
                                        
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
            </div>
        )
    }
}

export default ListPatientDetailsComponent
