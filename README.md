# PruebaTecnicaCarsales

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8. And it's made with [NRGX](https://ngrx.io/)

## ¿How to Run?

There are 3 ways.

### 1. Local Development server

First install all dependences using `npm i` then when it's finished, execute `npm run serve` and navigate to `http://localhost:4200/`.

### 2. Using docker-compose.

Stay en main folder and execute `docker-compose up`

then navigate to `http://localhost:8888/`

### 3. Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Structure

- app
  - main
    - dao = contains data objects
    - services = services
    - uc = use case
    - ui = Presentation
  - shared = Import and Export Modules
  - app.module.ts = Root module

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
