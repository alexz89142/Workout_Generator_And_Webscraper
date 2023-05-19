# Workout Generator
This is a work-in-progress full-stack webapp that is intended to take input from a user, specifying what types of exercises they'd like to do, then scrape the [MuscleWiki Directory](https://musclewiki.com/directory) and show the user a workout plan based on the criteria they selected

Currently only the back-end development has started, to make sure all is working properly with the data gathering. The front-end will be built after that.

Back-end is being written in NodeJS and will be used for web scraping and hosting
Front-end will be Svelte

For development in Docker, a Dockerfile and docker-compose.yml is provided. The app is ulimately meant to run either natively on a server or in a Docker container