# MntCrawfordUi

The Town of Mount Crawford website, built with [Angular](https://angular.dev/) 22 and Angular CLI 22.

## Prerequisites

Use Node.js 22.22.3 or newer (see `.nvmrc`) and npm 8 or newer.

Install dependencies with `npm install`.

## Development server
Run `npm start` for a development server at `http://localhost:4200/`. The app reloads automatically as source files change.

## Builds

Run `npm run build` for a development build or `npm run build:production` for a production build. Build artifacts are written to `dist/mnt-crawford-ui/`.

## Running unit tests

Run `npm test` to execute the Karma/Jasmine unit tests.
or `npm test -- --watch=false --browsers=ChromeHeadless`


## Running end-to-end tests

Install the local Chromium test browser once with `npx playwright install chromium`, then run `npm run e2e`. or `npm run e2e -- --reporter=line`


## Linting

Run `npm run lint` to lint TypeScript and Angular templates with Angular ESLint.
