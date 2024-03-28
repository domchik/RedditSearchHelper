**README.md**

# Reddit Search Helper App

An application for searching Reddit posts built with React and Node.js  


## General comments
* Usually I use TypeScript for both React and Node.js projects. I wrote this application in Javascript for the sake of simplicity
* React project was created using Vite (https://vitejs.dev/)
* Tailwind CSS was used as a CSS framework 
* .env file was omitted for the sake of simplicity  
* Dockerfile was not added 

## Key Features

* Search Reddit posts by keyword and displays the results containing the fields according to the spec.
* A 3rd party tooltip library was added to show long posts more clearly
* Html sanitation was added in the backend to prevent potentially harmful content 
* Skeleton loader was added for enhanced user experience 

## Project Structure
The project was created as monorepo:
* **RedditSearchClient/** -React frontend 
* **RedditSearchServer/** - Node.js/Express backend

## How to use

1. Run `npm install` from the ROOT folder.
2. **Install projects' dependencies:** run `npm run install-all` from the ROOT folder.
3. **Run BE tests:** `npm test-be` from the ROOT folder
4. **Run FE tests:** `npm test-fe` from the ROOT folder
5. **Run the apps:** `npm start` from the ROOT folder
5. **The app is running on:** http://localhost:3001

## Preview

![Preview](preview.png)