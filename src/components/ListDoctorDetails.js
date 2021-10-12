import React, { Component } from 'react'
import AdminServices from '../services/AdminServices';

class ListDoctorDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            doctor: []
        }
        this.Home= this.Home.bind(this);
        this.addDoctor = this.addDoctor.bind(this);
        this.editDoctor = this.editDoctor.bind(this);
        this.deleteDoctor = this.deleteDoctor.bind(this);
    }
    Home()
    {
        window.location.href='/home'
    }
    viewDoctor(dId){
        this.props.history.push(`/view-doctor/${dId}`);
    }

    addDoctor(){
        this.props.history.push('/add-doctor/_add')
    }

    editDoctor(dId){
        this.props.history.push(`/add-doctor/${dId}`);
    }

    deleteDoctor(dId){
        AdminServices.deleteDoctor(dId).then( res => {
            this.setState({doctor: this.state.doctor.filter(doctor => doctor.dId !== dId)});
        });
    }
    
    componentDidMount() {
        AdminServices.getDoctor().then((res) => {
             this.setState({doctor: res.data});

        });
        
    }

    // addCar() {
    //     window.location.href='/add-car/_add'
    // }

    render() {
        return (
            <div className="customBackground">
            <div className="container">
                  
                <h2 className="text-center">Doctors List</h2>
                <div className="row">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                <button className="btn btn-primary" style={{ marginLeft: "10px" }}onClick={this.addDoctor}> Add Doctor</button>
                    {/* <button className="btn btn-primary" style={{ marginLeft: "10px" }}onClick={this.addCar}> Book Car</button> */}
                </div>
                <br></br>
                <div className="row">
                    <table  className="table table-striped table-bordered table-dark">

                        <thead>
                            <tr>
                                <th> Doctor ID</th>
                                <th> Doctor Name</th>
                                <th> Specialization</th>
                                <th> Doctor Email</th>
                                <th>  Password</th>
                               

                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.doctor.map(
                                    doctor =>
                                        <tr key={doctor.dId}>
                                            <td> {doctor.dId}</td>
                                            <td> {doctor.dName} </td>
                                            <td> {doctor.specialization}</td>
                                            <td> {doctor.doctorEmail}</td>
                                            <td> {doctor.password}</td>
                                            

                                            {/* <td><button style={{ marginLeft: "10px" }} onClick={() => this.viewIncentive(car.id)} className="btn btn-info">View Incentive </button> */}
                                            <td><button style={{ marginLeft: "10px" }} onClick={() => this.editDoctor(doctor.dId)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteDoctor(doctor.dId)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewDoctor(doctor.dId)} className="btn btn-info">View</button>
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

export default ListDoctorDetailsComponent