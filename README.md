# vagrant-react-articles-spring-boot-rest-api
(c) Andre Lohmann (and others) 2019

## Maintainer Contact
 * Andre Lohmann
   <lohmann.andre (at) gmail (dot) com>

## content

!!! SPRING BOOT REST API IS STILL IN DEVElOPMENT !!!

Evaluating the development of an articles app based on react, bootstrap and json-server backend.

## Usage

### Configuration

Copy the config.yml.example to config.yml and alternate as you need it.

Copy the application/db.json.example to application/db.json.

### Run

```
vagrant up
```

The Vagrantfile installs one machine with docker + nodejs and creates a react app template using [create-react-app](https://facebook.github.io/create-react-app/) in the /application folder. It also starts the autoreloader in the background.

Run the API in `/spring-boot-rest-api`:

```
./mvnw  package && java -jar target/demo-0.0.1-SNAPSHOT.jar
```

Run the App In `/application`:
```
npm start
```

Access the App:
```
http://YOUR.CONFIGS.DOMAIN:3000
```

### Commands

Commands that had been run during the Development process

#### Install json-server as a dev dependency

```
npm install --save-dev json-server
```

#### Install necessary packages

```
npm install --save redux react-redux redux-thunk react-router-dom axios
```

### Run lokal Development Server

```
./node_modules/.bin/json-server db.json --watch db.json --port 5000  --host 0.0.0.0
```

### Run test

```
npm test
```

### Demo API

This app uses an articles demo API; articles are just items. They're identified by their ids, which are unique long integers, and live under `/api/<api-version>/articles/<id>`.
API's version and healthcheck are endpoints, they live under `/api/<api-version>/version` and `/api/<api-version>/healthcheck` consecutively.

API verbs:

Verb | Endpoint
------|------------
GET | `/api/<api-version>/version`
GET | `/api/<api-version>/healthcheck`
GET | `/api/<api-version>/articles`
GET | `/api/<api-version>/articles/<id>`
POST | `/api/<api-version>/articles`
PATCH | `/api/<api-version>/articles/<id>`
DELETE | `/api/<api-version>/articles/<id>`

Default port is `8080`

For example, to get all articles: http://react-articles.lokal:8080/api/v1/articles

response:

```javascript
[
   {
    "id": 1,
    "title": "Lorem Ipsum",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis aliquam laoreet. Aliquam erat volutpat.",
    "createdAt": "2019-11-13T19:14:25.964+0000",
    "updatedAt": "2019-11-13T19:14:25.964+0000"
   }
]
```

## Used Tutorials
  * https://www.techandstartup.com/tutorials/react-redux-crud-app
