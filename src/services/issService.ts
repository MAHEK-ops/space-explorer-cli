import axios from "axios"

export class ISSService {

 async getISSLocation() {

   const response = await axios.get(
     "http://api.open-notify.org/iss-now.json"
   )

   return response.data
 }

}