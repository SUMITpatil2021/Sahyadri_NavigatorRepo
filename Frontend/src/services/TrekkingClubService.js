import axios from 'axios';
let baseUrl="http://localhost:8080/"

class TrekkingClubService{
    getAllTrekks(clubid){
        console.log(clubid)
        return axios.get(baseUrl+"getTrekkDetails?clubid="+clubid)
     }
 
     deleteTrekk(trekkid){
         return axios.delete(baseUrl+"deleteTrekk?tid="+trekkid)
     }

}
export default new TrekkingClubService();