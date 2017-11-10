# Maze game / Sokoban

## About

Simple maze game which allows the user to move their character in 2 dimensions through the course. If they land on the
yellow square they win. They cannot pass through the walls (grey tiles).

A second type of maze is available - Sokoban - which allows the user to push crates around. The user must put crates on
each one of the target tiles (pink tile) before proceeding to the exit.

## Technology

This is developed using React, ES6 syntax is transpiled into ES5 through Babel. Redux is used as state management, with
the layout of the maze stored in this global state in a 2D array. Styling is developed using Sass (SCSS), and styles are
located with components. Webpack is used to bundle the JS all together and injected into the HTML. Custom maze files can
be created using JSON files, with the 2D array as the `maze` property within the the JSON file.

## Installation

 * Node 6.x is required to run (ES6 syntax in webpack config), NPM 5+ is also advised to make use of the package lock.
 * Run `npm install`
 * Run `npm start`
 * Navigate to `localhost:8080`