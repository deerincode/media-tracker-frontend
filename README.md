# Media Tracking App (Front-end)
## Introduction
This is the front-end of a full MERN stack application. The app is designed to allow the user to create collections of different media (movies, videogames, albums, etc). Each model can contain various details about the specific kind of media (title, release year, creators, etc), reviews/notes about the media, and tracking for if the piece of media has been watched/played/etc. The current build has full CRUD functionality for both Movie and Videogame models.

[Media Tracker Deployed App](https://vogue-mediatracker-app.onrender.com/)

[Media Tracker Deployed Back-end (Movies)](https://github.com/deerincode/media-tracker-backend/movies)

[Media Tracker Deployed Back-end (Videogames)](https://github.com/deerincode/media-tracker-backend/videogames)

[Back-end Repository](https://github.com/deerincode/media-tracker-backend)

## Technologies Used
- HTML
- CSS
- Javascript
- React
- React Router
- Axios
- Render Cloud Hosting

## Getting Started
-----
#### Step 1: Clone the repo

To clone the repository, use the following command in your terminal.
### `git clone https://github.com/deerincode/media-tracker-frontend.git`

#### Step 2: Install Required Packages

In terminal, navigate your current working directory to `./mediatracker-react`, followed with the below command:

### `npm install`

#### Step 3: Configuration

In both movies-api.js and videogame-api.js, configure the baseURL for the appropriate backend

movies-api local backend:

 `const baseURL = 'http://localhost:3001/movies/'`

movies-api deployed backend:

`const baseURL = 'https://vogue-mediatracker-backend.onrender.com/movies'`

videogames-api local backend:

`const baseURL = 'http://localhost:3001/videogames/'`

videogames-api deployed backend:

`const baseURL = 'https://vogue-mediatracker-backend.onrender.com/movies'`

#### Step 4: Run the app

`npm start`

## Unsolved Problems
No unresolved issues in current build!

## Future Enhancements
- Additional models for different types of media (Albums and Books currently planned)
- Use of third party APIs to fetch media details
- Support for multiple unique users. Ability to create an account and login, have a personal media collection
- Search and filter features
- Styling
- Light and Dark mode
- Scaling for use on mobile

