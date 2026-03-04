import axios from "axios"

export class NasaService {

 async getAPOD() {

  const response = await axios.get(
   "https://api.nasa.gov/planetary/apod?api_key=hQ1wRW31qXatEDdDYAeLugj9DuniiBFIZq3qdbkG"
  )

  return response.data
 }

 async getMarsPhotos() {

  const response = await axios.get(
   "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hQ1wRW31qXatEDdDYAeLugj9DuniiBFIZq3qdbkG"
  )

  return response.data
 }

 async getAsteroids() {

  const response = await axios.get(
   "https://api.nasa.gov/neo/rest/v1/feed?api_key=hQ1wRW31qXatEDdDYAeLugj9DuniiBFIZq3qdbkG"
  )

  return response.data
 }

}