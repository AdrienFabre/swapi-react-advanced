# SWAPI React advanced

This programme enables you to seach data from the Star Wars API resources.

The data contains the resource types:

- People: 87
- Planets: 61
- Films: 7
- Species : 37
- Vehicles: 39
- Starships: 37

## User story

```md
As a user,
So I can get access to Star Wars resources page,
I want to login.

As a user,
So I can see the relevant resources,
I want to filter them by type and see a list.

As a user,
So I can conveniently search in the resource in the type I picked.
I want to extend my search with a fuzzy field.

As a user,
So I can see the details of my selected elements,
I want to access a detailed view.
```

## Requirements

- If the user is logged in, he can refresh the browser and has not to login again.
- Handle the authentication locally in your app and not consume any external services like auth0

## Technology

This project uses:

- React
- TypeScript
- ES6+
- [Star Wars API](https://swapi.co)

### Run app

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
