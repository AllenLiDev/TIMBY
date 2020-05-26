# TIMBY

TIMBY (Tour In My Back Yard) is a progressive web app (PWA) that connects local tour guides with travellers who are looking for a more authentic travel experience.

Have you ever wondered what locals do in their own city for fun? With TIMBY, our goal is to create lasting travel memories for tourists by connecting them with locals and at the same time for locals to share their secret hot-spots while making income on the side.

With TIMBY, locals can create and list their own tours on the app. Using the Google Maps API, tourists can browse for tours and request to book a tour of their choice. The tour guide has the option to confirm or decline any booking request. Once a tour is completed, a tourist can leave a rating and feedback for a tour.

As a PWA, TIMBY supports push notifications and cache-first asset loading for a native-app-like user experience.

TIMBY was collaboratively built with [Dexter](https://github.com/dexterchan94/) and [Jason](https://github.com/jpark-dev/)

## Images

<img style="float: left" width="400" src="https://github.com/allenlidev/TIMBY/blob/master/screenshots/timby-search.jpg?raw=true">
<img style="float: left" width="400" src="https://github.com/allenlidev/TIMBY/blob/master/screenshots/timby-listings-confirm.jpg?raw=true">
<img style="float: left" width="400" src="https://github.com/allenlidev/TIMBY/blob/master/screenshots/timby-booking-details.jpg?raw=true">
<img style="float: left" width="400" src="https://github.com/allenlidev/TIMBY/blob/master/screenshots/timby-feedback.jpg?raw=true">
<img style="float: left" width="400" src="https://github.com/allenlidev/TIMBY/blob/master/screenshots/timby-notifications.jpg?raw=true">
<img style="float: left" width="400" src="https://github.com/allenlidev/TIMBY/blob/master/screenshots/timby-push-notifications.jpg?raw=true">


## Dependencies

### Back-End

* node
* express
* body-parser
* CORS
* dotenv
* pg
* web-push

### Front-End

* react
* axios
* material-ui
* cra-append-sw


## Development Dependencies

* cypress
* jest
* react-test-renderer
* testing-library
* serve


## Getting Started

### Back-End

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the `.env` with the database and vapid key information
3. Install dependencies: `npm install`
4. Reset database: `npm run resetdb`
5. Run the server: `npm start`
6. The back-end API is now running and can be accessed via `http://localhost:8080/`
8. Visit `http://localhost:8080/`

### Front-End
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the `.env` with the back-end API URL `http://localhost:8080/` and vapid key information
3. Install dependencies: `npm install`
4. Build the production version: `npm run build`
5. Serve the front end: `serve -s build`
6. Visit the URL provided by serve (e.g. `http://localhost:5000`)
7. Sign in as a user by typing in the dev tools console: `localStorage.setItem('userID', 7)`
8. Open the Application tab of the dev tools and click skipWaiting to activate the new service worker
9. Refresh the page


## Testing

A simple end-to-end testing suite for the front-end was written using Cypress.
```npm run cypress```
