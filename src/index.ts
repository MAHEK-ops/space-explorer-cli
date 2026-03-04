#!/usr/bin/env node

import { Command } from "commander"
import { NasaService } from "./services/nasaService"
import { ISSService } from "./services/issService"
import { NewsService } from "./services/newsService"

const program = new Command()

const nasaService = new NasaService()
const issService = new ISSService()
const newsService = new NewsService()

program
  .name("space")
  .description("Space Explorer CLI")
  .version("1.0.0")

// APOD
program.command("apod")
.description("Astronomy Picture of the Day")
.action(async () => {

  const data = await nasaService.getAPOD()

  console.log("Title:", data.title)
  console.log("Explanation:", data.explanation)
  console.log("Image:", data.url)

})

// Mars photos
program.command("mars")
.description("Mars Rover Photos")
.action(async () => {

  const data = await nasaService.getMarsPhotos()

  console.log("Mars Rover Photo:")
  console.log(data.photos[0].img_src)

})

// Asteroids
program.command("asteroids")
.description("Near Earth Asteroids")
.action(async () => {

  const data = await nasaService.getAsteroids()

  console.log("Asteroid Name:", data.near_earth_objects[Object.keys(data.near_earth_objects)[0]][0].name)

})

// ISS location
program.command("iss")
.description("Current ISS Location")
.action(async () => {

  const data = await issService.getISSLocation()

  console.log("Latitude:", data.iss_position.latitude)
  console.log("Longitude:", data.iss_position.longitude)

})

// Astronauts
program.command("astronauts")
.description("Astronauts currently in space")
.action(async () => {

  const data = await issService.getAstronauts()

  console.log("People in Space:", data.number)

  data.people.forEach((person: any) => {
    console.log(person.name)
  })

})

// Space news
program.command("news")
.description("Latest space news")
.action(async () => {

  const news = await newsService.getNews()

  console.log(news.results[0].title)
  console.log(news.results[0].url)

})

// Random planet
program.command("planet")
.description("Random planet fact")
.action(() => {

  const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

  const random = planets[Math.floor(Math.random() * planets.length)]

  console.log("Random Planet:", random)

})

// Galaxy command
program.command("galaxy")
.description("About Milky Way")
.action(() => {

  console.log("Our galaxy is the Milky Way 🌌")

})

// Rocket launches
program.command("launches")
.description("Upcoming rocket launches")
.action(() => {

  console.log("Check NASA website for upcoming launches 🚀")

})

// Help info
program.command("info")
.description("About Space CLI")
.action(() => {

  console.log("Space Explorer CLI helps explore space data from terminal")

})

program.parse(process.argv)