## Air Quality API

> REST API that exposes "the air quality information" of a nearest city to GPS coordinates

### Requirements

- Node.js
- MongoDB

### Setup

Clone the repository

```sh
git clone https://github.com/iamwebwiz/air-quality-api.git
```

Navigate to the cloned directory

```sh
cd air-quality-api
```

Install dependencies using npm, yarn or pnpm

```sh
yarn
```

Copy the contents of `.env.example` to `.env`

```sh
cp .env.example .env
```

Update the values of `IQAIR_API_KEY` and `MONGODB_URI` in the `.env` file

Start mongodb on your machine, then

Start the development server

```sh
yarn dev
```

### Endpoints

`/api/air-quality`

Get the air quality for a given zone (longitude and latitude)

Query params (required):

- longitude
- latitude

Sample response:

```json
{
  "Result": {
    "Pollution": {
      "ts": "2024-05-06T12:00:00.000Z",
      "aqius": 47,
      "mainus": "p2",
      "aqicn": 16,
      "maincn": "p2"
    }
  }
}
```

`/api/air-quality/most-polluted`

Get the date and time where the Paris zone is most polluted

Sample response:

```json
{
  "Result": {
    "Date": "Mon May 06 2024",
    "Time": "16:00:00 GMT+0100 (West Africa Standard Time)"
  }
}
```

### Testing

To run the available tests, run the following command:

```sh
yarn test
```

or

```sh
npm run test
```

or

```sh
pnpm test
```
