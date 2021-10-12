import React, { Component } from 'react'
import AdminServices from '../services/AdminServices';

class ListAdminDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            admin: []
        }
        this.Home= this.Home.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
        
    }
    Home()
    {
        window.location.href='/home'
    }
    
    componentDidMount() {
        AdminServices.getAdmin().then((res) => {
             this.setState({admin: res.data});

        });
        
    }

    addAdmin(){
        this.props.history.push('/add-admin')
    }

    // addCar() {
    //     window.location.href='/add-car/_add'
    // }

    render() {
        return (
            <div className="customBackground">
            <div className="container">
                  
                <h2 className="text-center">Admins List</h2>
                <div className="row">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                    <button className="btn btn-primary" style={{ marginLeft: "10px" }}onClick={this.addAdmin}> Add Admin</button>
                </div>
                <br></br>
                <div className="row">
                    <table  className="table table-striped table-bordered table-dark">

                        <thead>
                            <tr>
                                <th> Admin ID</th>
                                <th> Admin Name</th>
                                <th> Admin Password</th>
                               

                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.admin.map(
                                    admin =>
                                        <tr key={admin.adminId}>
                                            <td> {admin.adminId}</td>
                                            <td> {admin.userName} </td>
                                            <td> {admin.password}</td>
                                            

                                            {/* <td><button style={{ marginLeft: "10px" }} onClick={() => this.viewIncentive(car.id)} className="btn btn-info">View Incentive </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.editCar(car.id)} className="btn btn-info">Update Car Details</button></td> */}
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

export default ListAdminDetailsComponent