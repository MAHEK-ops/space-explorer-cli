import { Command } from "commander"
import figlet from "figlet"

const program = new Command()
console.log(figlet.textSync("SPACE CLI"))

program
    .name("space")
    .description("Space Explorer CLI")
    .version("1.0.0")

program.parse(process.argv)