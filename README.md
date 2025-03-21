# My Portfolio

This is my personal website / portfolio. 

## Technologies and Tools Used
I previously used Angular v19.0.7 and TypeScript, but I redeveloped my portfolio using React and JavaScript. 
React
JavaScript
HTML
CSS
React Router Dom
React Icons
Font Awesome Icons
Git
Github Pages
Github Actions

## Installation and Scripts
First, check to see if you have node.js and npm installed. Run: 

```bash
node -v
```

If you have node installed, you'll see a version number (e.g., v22.13.0). If node is not installed, you need to download it. --> [Download nodejs](https://nodejs.org/en/download)

Check your npm version by running the following command:

```bash
npm -v
```

It will also give you a version number (e.g., v10.9.2). Npm comes bundled with node, so you don't need to install npm separately.

Next, create a Vite project with React. Run:

```bash
npm create vite@lastest .
```

Select a framework and variant. I chose "React" and "JavaScript".

Install the application.

```bash
npm install
```

Install packages.

```bash
npm i react-router-dom@6
npm i react-icons
npm install --save @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons
```

Run the following to start the React app.

```bash
npm run dev
```

Once the server is running, open your browser and navigate to `http://localhost:5173/`. The application will automatically reload whenever you modify any of the source files.

To exit your server, press Ctrl + C

## To build and deploy
Run the following to build your project. 

```bash
npm run build
```

It should have created a dist folder with your build. 

To deploy your project, run the following:

```bash
npm run deploy
```
