import { Command } from "commander"
import figlet from "figlet"
import { NasaService } from "./services/nasaService"


const program = new Command()
console.log(figlet.textSync("SPACE CLI"))
const nasaService = new NasaService()

program
 .command("apod")
 .description("Astronomy Picture of the Day")
 .action(async () => {

   const data = await nasaService.getAPOD()

   console.log("Title:", data.title)
   console.log("Explanation:", data.explanation)
   console.log("Image:", data.url)

 })
program
    .name("space")
    .description("Space Explorer CLI")
    .version("1.0.0")

program.parse(process.argv)