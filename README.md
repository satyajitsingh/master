# Submit Facility Time

To get started clone the repo and run 

## Installation

Set the mandatory environment variables e.g.

```bash
export NODE_ENV=production
export BASE_URL=http://localhost:3000
export NOTIFY_API_KEY=46ecbec5ec7951ce102670dbd0b2def5
export GA_ID=UA-00000000-1
export COOKIE_SECRET=5ca3af0fd9e5b83ccf6d56bf14e1d804
export TOKEN_SECRET=3917b35f95ac2cf0ec9f71224ee1d0f3
export DATABASE_NAME=facilitytime
export DATABASE_HOST=localhost
export DATABASE_USERNAME=facilitytime
export DATABASE_PASSWORD=password
export FLAGPOLE_MAINTENANCE=false
export LOG_LEVEL=info
```

```bash
$ npm install
$ npm start
```
Then go to [http://localhost:3000/](http://localhost:3000/).

## Development

```bash
nodemon start.js
```

```bash
grunt generate-assets
```

Run all tests e.g.

```bash
npm run test
```

Run a single test e.g.

```bash
./node_modules/mocha/bin/mocha test/common/services/calculate-field.test.js
```