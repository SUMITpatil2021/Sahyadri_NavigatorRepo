import axios from 'axios';
let baseUrl="http://localhost:8080/"

class AdminService{
    getAllUsers(){
       return axios.get(baseUrl+"getall")
    }

    deleteUser(userid){
        return axios.delete(baseUrl+"deleteuser?uid="+userid)
    }

    getAllClubs(){
        return axios.get(baseUrl+"getallclubs")
    }

    deleteClub(clubid){
        return axios.delete(baseUrl+"deleteclub?clubid"+clubid)
    }

    updateTrekker(user){
        return axios.put(baseUrl+"EditTrekker"+user.userid,user)
    }
}


export default new AdminService();