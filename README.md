# Getting Started

I recommend starting things out by viewing the live [GitHub page](https://ashblue.github.io/giphy-example-app). Once you're done proceed on to setting up a local environment.

https://ashblue.github.io/giphy-example-app

Type the following command if using NVM or set your Node.js version to the [.nvmrc](./.nvmrc) contents.

```bash
nvm use
```

Install dependencies and run the app.

```bash
npm install
npm start
```

View the app at [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm lint`

Lints the project with the current eslint configuration.

### `npm test`

Launches the test runner in the interactive watch mode. Please note there are custom tests for this project.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

Creates a production build and automatically deploys to GitHub pages. Requires repo admin privileges.

## What I'd Do With More Time

- Address vulnerabilities in NPM (criticals listed, but it appears React is aware and they aren't harmful)
- Sort displayed GIFs with Giphy's image gallery package
- Address Webpack SVG import errors with a global import override or mock imports globally via Jest
- Move to cleaner styling instead of classes with something like Emotion
- Make navigation data driven and break into separate components
- Condense overlapping page logic into an atomic design default template
- Upgrade production builds to a Giphy prod key that's injected on prod builds via environment file
- Move page over to static rendering with Next.js for initial page display. Currently, the initial Giphy API call is pretty slow
- Record the last search as a query parameter, so it can be copy and pasted to be shared
- Add gif auto-load pagination when scrolling near the bottom
- Restore previous search when navigating between pages
