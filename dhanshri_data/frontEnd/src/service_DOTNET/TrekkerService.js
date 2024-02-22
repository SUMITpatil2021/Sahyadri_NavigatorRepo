import axios from 'axios';
let baseUrl="https://localhost:7219/api/Bookedtrekk/"

class TrekkerService{
    GetBookedtrekk(userid){
        return axios.get(baseUrl+"GetBookedtrekk?userid="+userid)
     }
 
     deleteTrekk(trekkid){
         return axios.delete(baseUrl+"deleteTrekk?tid="+trekkid)
     }
}
export default new TrekkerService();