import axios from 'axios';
let baseUrl="http://localhost:8080/"

class TrekkingClubService{
    getAllTrekks(){
        return axios.get(baseUrl+"getAllTrekkDetails")
     }
 
     deleteTrekk(trekkid){
         return axios.delete(baseUrl+"deleteTrekk?tid="+trekkid)
     }
}
export default new TrekkingClubService();