#!/usr/bin/env node

import { Command } from "commander"
import chalk from "chalk"

import { NasaService } from "./services/nasaService"
import { ISSService } from "./services/issService"
import { NewsService } from "./services/newsService"
import { validateNumber } from "./utils/validator"

const program = new Command()

const nasaService = new NasaService()
const issService = new ISSService()
const newsService = new NewsService()

program
.name("space")
.description(" Space Explorer CLI - Explore space data from your terminal")
.version("1.0.0")

// APOD

program
.command("apod")
.description("Get NASA Astronomy Picture of the Day")
.option("-d, --date <date>", "Get APOD for a specific date")
.action(async (options) => {

    const data = await nasaService.getAPOD()

    console.log(chalk.yellow("\n Astronomy Picture of the Day\n"))

    console.log(chalk.green("Title:"), data.title)
    console.log(chalk.blue("Explanation:"), data.explanation)
    console.log(chalk.magenta("Image URL:"), data.url)

})


// Asteroids Today

program
.command("asteroids")
.description("List near-earth asteroids for today")
.option("-l, --limit <number>", "Number of asteroids to show", "3")
.action(async (options) => {

    const limit = validateNumber(options.limit, "Limit")

    const data = await nasaService.getTodayAsteroids()

    const today = Object.keys(data.near_earth_objects)[0]

    const asteroids = data.near_earth_objects[today].slice(0, limit)

    console.log(chalk.yellow("\n Near Earth Asteroids\n"))

    asteroids.forEach((a:any) => {
        console.log(chalk.green(a.name))
    })

})


// ISS Location

program
.command("iss")
.description("Get current location of the International Space Station")
.action(async () => {

    const data = await issService.getISSLocation()

    console.log(chalk.yellow("\n ISS Current Location\n"))

    console.log(chalk.green("Latitude:"), data.iss_position.latitude)
    console.log(chalk.green("Longitude:"), data.iss_position.longitude)

})


// Astronauts

program
.command("astronauts")
.description("List astronauts currently in space")
.action(async () => {

    const data = await issService.getAstronauts()

    console.log(chalk.yellow("\n People Currently in Space\n"))

    console.log(chalk.green("Total:"), data.number)

    data.people.forEach((person:any) => {
        console.log(chalk.blue(person.name))
    })

})


// Space News

program
.command("news")
.description("Get latest space news")
.action(async () => {

    const news = await newsService.getNews()

    console.log(chalk.yellow("\n Latest Space News\n"))

    console.log(chalk.green(news.results[0].title))
    console.log(chalk.blue(news.results[0].url))

})


// Random Planet

program
.command("planet")
.description("Get a random planet name")
.action(() => {

    const planets = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ]

    const random = planets[Math.floor(Math.random() * planets.length)]

    console.log(chalk.yellow("\n Random Planet"))
    console.log(chalk.green(random))

})


// Galaxy

program
.command("galaxy")
.description("Learn about our galaxy")
.action(() => {

    console.log(chalk.yellow("\n Galaxy Info"))
    console.log(chalk.green("Our galaxy is the Milky Way."))

})


// Launches

program
.command("launches")
.description("Information about upcoming rocket launches")
.action(() => {

    console.log(chalk.yellow("\n Rocket Launches"))
    console.log(chalk.green("Visit NASA website for upcoming launches."))

})


// Info

program
.command("info")
.description("About Space Explorer CLI")
.action(() => {

    console.log(chalk.yellow("\n Space Explorer CLI"))
    console.log(chalk.green("A CLI tool to explore space data using public APIs."))

})

program.parse(process.argv)