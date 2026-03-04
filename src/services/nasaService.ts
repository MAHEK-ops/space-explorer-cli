import axios from "axios"


export class NasaService {

 async getAPOD() {

   const response = await axios.get(
     "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
   )

   return response.data
 }

}