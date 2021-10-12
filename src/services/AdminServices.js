import axios from 'axios';
import UseEffect1 from '../UseEffect/UseEffect1';


class AdminServices {

    getAdmin(){
        return axios.get("http://localhost:8084/getAdmin");
    }
    getPatient(){
        return axios.get("http://localhost:8084/getPatient");
    }
    getDoctor(){
        return axios.get("http://localhost:8084/getDoctor");
    }
    addAdmin(admin){
        return axios.post("http://localhost:8084/addAdmin",admin);
    }
    addDoctor(doctor){
        return axios.post("http://localhost:8084/addDoctor",doctor);
    }
    getDocById(dId){
        return axios.get("http://localhost:8084/getDoctorById"+ '/' + dId);
    }
    updateDoctor(doctor){
        return axios.put("http://localhost:8084/updateDoctor" , doctor);
    }
    addPatient(patient){
        return axios.post("http://localhost:8084/Doctor/addPatient",patient);
    }
    getPatientById(pId){
        return axios.get("http://localhost:8084/Doctor/getPatientById"+ '/' + pId);
    }
    updatePatient(patient,pId){
        return axios.put("http://localhost:8084/Doctor/updatePatient" + '/' + pId, patient);
    }


    
    deleteDoctor(dId){
        return axios.delete("http://localhost:8084/deleteDoctor" + '/' + dId);
    }
    


    
}
export default new AdminServices()