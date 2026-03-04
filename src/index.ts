import { Command } from "commander"

const program = new Command()

program
    .name("space")
    .description("Space Explorer CLI")
    .version("1.0.0")

program.parse(process.argv)