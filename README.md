#  Space Explorer CLI

Space Explorer CLI is a command-line tool built with **Node.js and TypeScript** that allows users to explore space-related data directly from the terminal.  
It integrates multiple public APIs to fetch real-time information such as NASA’s Astronomy Picture of the Day, near-earth asteroids, ISS location, astronauts currently in space, and the latest space news.

---

#  Features

- Fetch **NASA Astronomy Picture of the Day**
- View **Near-Earth Asteroids**
- Track the **International Space Station**
- List **Astronauts currently in space**
- Get the **latest space news**
- Generate a **random planet**
- Display **galaxy information**
- Information about **rocket launches**
- Colored CLI output
- Command flags/options
- Input validation
- Helpful command descriptions

---

#  Tech Stack

- **Node.js**
- **TypeScript**
- **Commander.js** (CLI framework)
- **Axios** (API requests)
- **Chalk** (colored terminal output)

---

#  Installation

Clone the repository:

```bash
git clone https://github.com/your-username/space-explorer-cli.git
```

Navigate to the project folder:

```bash
cd space-explorer-cli
```

Install dependencies:

```bash
npm install
```

Run the CLI:

```bash
npx ts-node src/index.ts <command>
```

---

#  Usage

General command format:

```
npx ts-node src/index.ts <command> [options]
```

Example:

```
npx ts-node src/index.ts apod
```

---

#  Available Commands

##  Astronomy Picture of the Day

Fetch NASA’s Astronomy Picture of the Day.

```
npx ts-node src/index.ts apod
```

Example Output:

```
Title: Shapley 1: An Annular Planetary Nebula
Explanation: ...
Image URL: https://apod.nasa.gov/apod/image/2603/...
```

---

##  Near-Earth Asteroids

Displays asteroids passing near Earth today.

```
npx ts-node src/index.ts asteroids
```

Example:

```
npx ts-node src/index.ts asteroids
```

Output:

```
480858 (2001 PT9)
527977 (2008 EY68)
(2014 JR25)
```

### Optional Flag

Limit number of asteroids displayed:

```
npx ts-node src/index.ts asteroids --limit 5
```

or

```
npx ts-node src/index.ts asteroids -l 5
```

---

##  ISS Location

Shows the **current location of the International Space Station**.

```
npx ts-node src/index.ts iss
```

Example Output:

```
Latitude: 45.0329
Longitude: 148.7382
```

---

##  Astronauts in Space

Lists astronauts currently in space.

```
npx ts-node src/index.ts astronauts
```

Example Output:

```
People in Space: 12
Sunita Williams
Butch Wilmore
Oleg Kononenko
...
```

---

##  Latest Space News

Displays the latest space-related news article.

```
npx ts-node src/index.ts news
```

Example Output:

```
Blowing Stellar Bubbles
https://www.nasa.gov/image-article/blowing-stellar-bubbles/
```

---

##  Random Planet

Displays a randomly selected planet.

```
npx ts-node src/index.ts planet
```

Example Output:

```
Random Planet: Earth
```

---

##  Galaxy Information

Shows a short fact about our galaxy.

```
npx ts-node src/index.ts galaxy
```

Output:

```
Our galaxy is the Milky Way
```

---

##  Rocket Launches

Displays information about rocket launches.

```
npx ts-node src/index.ts launches
```

Output:

```
Check NASA website for upcoming launches
```

---

##  CLI Information

Displays information about the CLI tool.

```
npx ts-node src/index.ts info
```

Output:

```
Space Explorer CLI helps explore space data from terminal
```

---

#  APIs Used

- **NASA Open APIs**
- **Open Notify API (ISS Data)**
- **Spaceflight News API**

---

#  Future Improvements

- Add more NASA APIs
- Add interactive CLI prompts
- Publish the CLI as an npm package
- Add more space exploration commands

---
