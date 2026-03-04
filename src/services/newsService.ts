import axios from "axios"

export class NewsService {

 async getNews() {

   const response = await axios.get(
     "https://api.spaceflightnewsapi.net/v4/articles"
   )

   return response.data
 }

}