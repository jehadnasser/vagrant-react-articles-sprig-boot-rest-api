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

Change the files in /application and watch the changes live using your configs domain.

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

## Used Tutorials
  * https://www.techandstartup.com/tutorials/react-redux-crud-app
