import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService';
import AdminServices from '../services/AdminServices';

class AddAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            // adminId: this.props.match.params.adminId,
            userName: '',
            password: ''
           
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveOrUpdateAdmin = this.saveOrUpdateAdmin.bind(this);
    }

    //step 3
    // componentDidMount(){

    //     step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         AdminServices.addAdmin(this.state.adminId).then( (res) =>{
    //             let admin = res.data;
    //             this.setState({userName: admin.userName,
    //                 password: admin.password,
                    
    //             });
    //         });
    //     }        
    // }
    saveOrUpdateAdmin = (e) => {
        e.preventDefault();
        let admin = {userName: this.state.userName, password: this.state.password};
        console.log('admin => ' + JSON.stringify(admin));

        AdminServices.addAdmin(admin).then(res =>{
            this.props.history.push('/admins');
        
        });

        // // step 5
        // if(this.state.id === '_add'){
        //     EmployeeService.createEmployee(employee).then(res =>{
        //         this.props.history.push('/employees');
        //     });
        // }else{
        //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
        //         this.props.history.push('/employees');
        //     });
        // }
    }
    
    changeNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    cancel(){
        this.props.history.push('/home');
    }
    Home() {
        window.location.href = '/home'
    }

    
    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">

                                <h4 style={{ color: 'black', textAlign: 'center', marginBottom: '10px' }}>Enter Admin Details here</h4>
                                <hr />
                                    <form>
    
                                        <div className = "form-group">
                                            <label>  Username: </label>
                                            <input placeholder="Username" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateAdmin}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   </div>
            </div>
        )
    }
}

export default AddAdminComponent