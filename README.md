This is a Test Evaluation app by strv recruitment team. Created by [Abdul Rehman Khan](https://github.com/Abdul-Rehman-Khan "Abdul Rehman Khan") using `TypeScript/React.js`.


## Eventio
A web app that allows registered users to sign up for and create/join events. 


## System Requirements

- git v2.13 or greater
- NodeJS 12 || 14 || 15 || 16
- npm v6 or greater

All of these must be available in your PATH. To verify things are set up properly, you can run this:

    git --version
    node --version
    npm --version

## Setup
    git clone https://github.com/Abdul-Rehman-Khan/eventio.git
    cd eventio
just run a follwing commands to get set up:
```shell
npm install
npm run validate
```
#### Running the app
```shell
npm start
```


## High Level Repo Architecture 
```rst
├── public            # fonts, icons and images
│   ├── fonts
│   ├── icons
│   ├── images
├── src	
│   ├── api           # APIs are defined here
│   └── components    # Reuseable Components
│   ├── context       # Defined a Auth context/state
│   ├── routes        # Application routes
│   ├── screens       # App Screens/Containers. 
│   ├── styles        # App global styles + constants
│   ├── utils         # App config + helper functions
```
## What's Done ? 🚀
Till now I have implemented the following features

#### Login and Authorized State
- [x] Login Page UI implementation a/c to designs
- [x] Login Form Implementation and Validation
- [x] User is being able to authenticate and authorize using APIs.
- [x] After logging in, users should be redirected to a list of all events
- [x] Implement logout functionality

#### Event List
- [x] Implement UI according to graphic resources
- [x] Implement toggle view mode functionality
- [x] Hook up API
- [x] List and filter All/Past/Future events
- [x] Implement JOIN/LEAVE event functionality

#### Create Event
- [x] Implement UI according to graphic resources
- [x] Implement form functionality + validations
- [x] Hook up API

#### 404 Page
- [x] Implement UI according to graphic resources

## What needs to be done ? 👷‍♂️

#### Sign Up/User Registration
- [ ] Implement UI according to graphic resources
- [ ] Implement form functionality + validations
- [ ] Hook up API

I have used Formik to Implement Forms, do check out my Implementation for Login to get some idea and dont forget to wrap your component with `<CoverImageLayout />`.

#### Event Details
- [ ] Create page/layout a/c to the designs
- [ ] Hook up API

#### User Profile
- [ ] Create page/layout a/c to the designs
- [ ] Hook up API

PRO Tip: Get basic user information form `context/authContext `

#### Issues ⚠️
There are some issues that need be addressed before getting started with the project, I haven't looked at them due to time constraints.

- [ ] Console logging a warning saying `warning: React has detected a change in the order of Hooks called by AuthProvider` after Login event.
  This warning may lead to bugs, as it may be breaking some rules for hooks, following links may be helpful 
```rst
https://reactjs.org/link/rules-of-hooks
https://stackoverflow.com/questions/57397395/react-has-detected-a-change-in-the-order-of-hooks-but-hooks-seem-to-be-invoked.
```
- [ ] There is a bit prop drilling in `screens/Events/Events.tsx` component, it should be solved via context API & a custom hook. 
  attaching a link that may be helpful
```rst
https://kentcdodds.com/blog/how-to-use-react-context-effectively
https://kentcdodds.com/blog/application-state-management-with-react  
```
- [ ] There are some issues in the deployed link, start script is now `node server.js` due to heroku deployment. When the browser url contains a path like `https://eventio-yz.herokuapp.com/events` and you refresh it, then it says `Cannot GET /events`, I want to debug this but one due to time constraints I am not able to look into this. if you change start script to `react-scripts start` it should work fine you can check that on local on the `dev` branch. 

## Queries ?
Reach out to me I will be more than happy to help you out.
`email : yz.abdulrehman.khan@gmail.com`


