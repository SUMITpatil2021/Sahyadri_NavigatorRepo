import axios from 'axios';
let baseUrl="https://localhost:7219/api/Bookedtrekk/"

class TrekkerService{
    GetBookedtrekk(bookid){
        return axios.get(baseUrl+"GetBookedtrekk?Bookid=")
     }
 
     deleteTrekk(trekkid){
         return axios.delete(baseUrl+"deleteTrekk?tid="+trekkid)
     }
}
export default new TrekkerService();