import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService';
import AdminServices from '../services/AdminServices';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UseEffect1 from '../UseEffect/UseEffect1';


class AddDoctorComponent extends Component {
  // services = new AdminServices();
    constructor(props) {
        super(props)

        this.state = {
            //step 2
            dId: this.props.match.params.dId,
            dName: '',
            specialization: '',
            doctorEmail: '',
            password: '',

            doctorObj: {
                "id": 0,
                "dName": "",
                "specialization": "",
                "doctorEmai": "",
                "password": ""
            }

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSpecializationHandler = this.changeSpecializationHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveOrUpdateDoctor = this.saveOrUpdateDoctor.bind(this);
    }


    validate = () => {
        let flag = true;
         var namePattern = new RegExp(/^[a-zA-Z ]+$/);
        if (!this.state.dId) {
            flag = false;
            this.setState({ dIdError: " Id Is Required" });
        } else {
            this.setState({ dIdError: "" });
        }
        if (this.state.dName === "") {
            flag = false;
            this.setState({ doctorNameError: "Name Is Required" });
        } else if (!namePattern.test(this.state.dName)) {
            this.setState({doctorNameError:"Name should contain alphabates only"}) ;
            flag = false;
          }
         else {
            this.setState({ doctorNameError: "" });
        }
        if (!this.state.specialization) {
            flag = false;
            this.setState({ specializationError: "Specialization Is Required" });
        } else if (!namePattern.test(this.state.specialization)) {
            this.setState({specializationError:"Should contain alphabates only"}) ;
            flag = false;
          } 
        else {
            this.setState({ specializationError: "" });
        }
        if (!this.state.doctorEmail) {
            flag = false;
            this.setState({ doctorEmailError: "Email Is Required" });
        } else {
            this.setState({ doctorEmailError: "" });
        }
        //var passwordPattern = new RegExp(/^([a-zA-Z0-9]+)([@#$%^&+=]*)((?=\\S+$).{8,20})$/);
        if (!this.state.password) {
            flag = false;
            this.setState({ passwordError: "Password Is Required" });
        } else if (this.state.password.length < 5) {
            this.setState({ passwordError: "Password length should be more than 5" });
        }
        // else if (!passwordPattern.test(this.state.password)) {
        //     this.setState({passwordError:"Invalid Password Format"}) ;
        //     flag = false;
        //   }
        else {
            this.setState({ passwordError: "" });
        }
        return flag;
    };

    // step 3
    componentDidMount() {

        //step 4
        if (this.state.dId === '_add') {
            return
        } else {
            AdminServices.getDocById(this.state.dId).then((res) => {
                let doctor = res.data;
                this.setState({
                    dName: doctor.dName, specialization: doctor.specialization, doctorEmail: doctor.doctorEmail, password: doctor.password

                });
            });
        }
    }
    saveOrUpdateDoctor = (e) => {
        console.log(this.state);
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);

            let doctor = {dId:this.state.dId, dName: this.state.dName, specialization: this.state.specialization, doctorEmail: this.state.doctorEmail, password: this.state.password };
            console.log('doctor => ' + JSON.stringify(doctor));

            // // step 5
            if (this.state.dId === '_add') {
                AdminServices.addDoctor(doctor).then(res => {
                    this.props.history.push('/doctors');
                });
            } else {
                AdminServices.updateDoctor(doctor).then(res => {
                    this.props.history.push('/doctors');
                });
            }
        }
    }

    changeNameHandler = (event) => {
        this.setState({ dName: event.target.value });
    }
    changeSpecializationHandler = (event) => {
        this.setState({ specialization: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ doctorEmail: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    cancel() {
        this.props.history.push('/home');
    }
    Home() {
        window.location.href = '/home'
    }

    getTitle() {
        if (this.state.dId === '_add') {
            return <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Doctor Details here</h4>
        } else {
            return <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Update doctor</h4>
        }
    }


    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>
                    <br></br>
                    <div className="container">
                        {/* <div className="row"> */}
                        {/* <div className="card col-md-6 offset-md-3 offset-md-3"> */}


                        {/* <div className="card-body"> */}


                        <form className="form-style">
                            {
                                this.getTitle()
                            }

                            <div className="form-group" style={{ color: 'white' }}>
                                <label>  Name: </label>
                                <div className="alert-danger">{this.state.doctorNameError}</div>
                                <input placeholder="DoctorName" name="dName" type="text" className="form-control"
                                    value={this.state.dName} onChange={this.changeNameHandler} />
                            </div>


                            <div className="form-group" style={{ color: 'white' }}>
                                <label>  Specialization: </label>
                                <div className="alert-danger">{this.state.specializationError}</div>
                                <input placeholder="Specialization" name="specialization" type="text" className="form-control"
                                    value={this.state.specialization} onChange={this.changeSpecializationHandler} />
                            </div>

                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Email: </label>
                                <div className="alert-danger">{this.state.doctorEmailError}</div>
                                <input placeholder="Email" name="doctorEmail" className="form-control"
                                    value={this.state.doctorEmail} onChange={this.changeEmailHandler} />
                            </div>
                            <div className="form-group" style={{ color: 'white' }}>
                                <label> Password: </label>
                                <div className="alert-danger">{this.state.passwordError}</div>
                                <input placeholder="Password" name="password" className="form-control"
                                    value={this.state.password} onChange={this.changePasswordHandler} />
                            </div>


                            <Button block size="lg" onClick={this.saveOrUpdateDoctor}>Save</Button>
                            {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button> */}



                        </form>
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}

                    </div>
                    <UseEffect1/>
                </div>
            </div>





            // <div>
            //     <div className="Login">
            //         <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>


            //         <Form onSubmit={this.saveOrUpdateDoctor} className="form-style">
            //             <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Doctor Details here</h4>
            //             <hr />
            //             <Form.Group size="lg" controlId="dName">

            //                 <Form.Label style={{ color: 'white' }}>Doctor Name</Form.Label>
            //                 <div className="alert-danger">{this.state.doctorNameError}</div>
            //                 <Form.Control
            //                     type="text" name="dName"
            //                     onChange={this.changeNameHandler} />
            //             </Form.Group>
            //             <Form.Group size="lg" controlId="specialization">
            //                 <Form.Label style={{ color: 'white' }}>Specialization</Form.Label>
            //                 <div className="alert-danger">{this.state.specializationError}</div>
            //                 <Form.Control
            //                     type="text" name="specialization"
            //                     onChange={this.changeSpecializationHandler} />
            //             </Form.Group>
            //             <Form.Group size="lg" controlId="doctorEmail">
            //                 <Form.Label style={{ color: 'white' }}>Email</Form.Label>
            //                 <div className="alert-danger">{this.state.doctorEmailError}</div>
            //                 <Form.Control
            //                     type="text" name="doctorEmail"
            //                     onChange={this.changeEmailHandler} />
            //             </Form.Group>


            //             <Form.Group size="lg" controlId="password">
            //                 <Form.Label style={{ color: 'white' }}>Password</Form.Label>
            //                 <div className="alert-danger">{this.state.passwordError}</div>
            //                 <Form.Control
            //                     autoFocus
            //                     type="text" name="password"
            //                     onChange={this.changePasswordHandler} />
            //             </Form.Group>


            //             <Button block size="lg" type="submit">
            //                Add Doctor
            // </Button>
            //         </Form>
            //     </div>

            // </div>
        )
    }
}

export default AddDoctorComponent



