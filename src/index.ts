import { Command } from "commander"
import figlet from "figlet"
import { NasaService } from "./services/nasaService"


const program = new Command()
console.log(figlet.textSync("SPACE CLI"))
const nasaService = new NasaService()

import { ISSService } from "./services/issService"

const issService = new ISSService()

program
 .command("iss")
 .description("Current location of ISS")
 .action(async () => {

   const data = await issService.getISSLocation()

   console.log("Latitude:", data.iss_position.latitude)
   console.log("Longitude:", data.iss_position.longitude)

 })
program
 .command("apod")
 .description("Astronomy Picture of the Day")
 .action(async () => {

   const data = await nasaService.getAPOD()

   console.log("Title:", data.title)
   console.log("Explanation:", data.explanation)
   console.log("Image:", data.url)

 })

 import { NewsService } from "./services/newsService"

const newsService = new NewsService()

program
 .command("news")
 .description("Latest space news")
 .action(async () => {

   const news = await newsService.getNews()

   console.log(news.results[0].title)
   console.log(news.results[0].url)

 })
program
    .name("space")
    .description("Space Explorer CLI")
    .version("1.0.0")

program.parse(process.argv)