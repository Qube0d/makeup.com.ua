# Playwright Tests
## for makeup

## Tech
- https://playwright.dev/
- https://www.npmjs.com/package/allure-playwright


## Installation

- Requires Node.js v14+ to run.
- Clone and checkout the github project

```sh
https://github.com/Qube0d/makeup.com.ua.git
```
- Open folder with Visual Studio Code
- Go to the terminal and execute "npm install" inside the  folder
```sh
npm install
```
## Running tests

- Go to the terminal and execute to run tests in headless mode:
```sh
npm test:h
```
- Go to the terminal and execute to run tests without headless mode:
```sh
npm test
```
## Allure-reports

- Run to generate report after check (or launch from package.json)
```sh
npm allure:generate
```
- Run to open report after generate (or launch from package.json)
```sh
npm allure:open
```