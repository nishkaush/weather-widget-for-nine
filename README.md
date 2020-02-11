This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, run

### `npm install`

For downloading all dependencies first

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if any edits made.<br />
Lint errors will be in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
App is ready to be deployed!

### `Considerations and Assumptions`

- Time spent on this project was 4 hours
- It was assumed that user knows how to allow location access for this app (if they happen to block it initially)
- This app is not going to prompt user again for his/her location access (if user denied it once at the start).
- However, an error is thrown telling the user to allow access to their location
- The UI was made to match as closely as possible with the given sketch however font type and its weights might vary
- The icon image clarity is dependent on icons supplied by open weather API itself
- This project works on all screens since its fully responsive
- Due to lack of time, the behaviour of this app wasn't checked on Internet Explorer
- Unit testing is always needed but due to lack of time, it was skipped for this project (Jest and Enzyme are the best tools)

### `Challenges`

- Writing semantic HTML is always a challenge and takes time
- Coverting wind degrees into direction names like NE, SW,etc
- Resisting the temptation to use redux (it would have been easier for data flow but would have been an overkill)
- Open weather API doesn't activate your API key straight away and their error for an invalid/inactive key is - `Enable javascript` (Not very helpful). This wasted atleast 30min to figure out why a react app could run in the browser but couldnt make API calls to open weather.
- Writing only functional components using hooks
