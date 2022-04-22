# Shafa's Spotify Clone
This is an clone app to search your own favorite songs and create your own playlist with Spotify!. . The project uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) to interact with Spotify

# # Problem
1. Creating Login with Implicit Grant Flows.
2. Able to search for a song and show it.
3. Able to store and create playlist the logged account.


## Built With

The major framework that was used to create this project is React.js and used different libraries such as:

1. Axios for networking with the Spotify Web API
2. React Router for navigigational components 
3. Redux for state management
4. Material-UI for declare some components
5. Eslint for make clean code, that can detect unuse imports, echaustive deps, duplicate props, and etc.

## Features

1. Login with Spotify account
2. Search for songs.
3. Create Playlist with your added songs.
4. use navigation to logout

## How to install
1. install CRA in local
```
npx create-react-app my-app
cd my-app
npm start
```
2. install Redux in local
```
npm install react-redux @reduxjs/toolkit
```
3. install Router in local 
```
npm install react-router-dom@5.3.0
```
4. install Eslint in local
```
npm install -g eslint && eslint src
```
5. install typescript
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
6. install mui component
```
npm install @mui/styles
```


## How to run
1. Setting up the env. Put your own spotify client Key into ```env.local```. PS: dont put real spotify client key in your  ```.env``` folder.
2. open up terminal, and type npm start



