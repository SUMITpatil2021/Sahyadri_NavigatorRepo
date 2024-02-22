import axios from 'axios';
let baseUrl="http://localhost:8080/"

class AdminService{
    getAllUsers(){
       return axios.get(baseUrl+"getall")
    }

    deleteUser(userid){
        return axios.delete(baseUrl+"deleteuser?uid="+userid)
    }

    deleteClub(clubid){
        return axios.delete(baseUrl+"deleteclub?clubid="+clubid)
    }

    getAllClubs(){
        return axios.get(baseUrl+"getallclubs")
    }

    approveClub(clubid){
        return axios.get(baseUrl+"approve?clubid="+clubid)
    }
}


export default new AdminService();