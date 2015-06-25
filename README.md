REX
=================

### Prerequisites

Install [NodeJs](https://nodejs.org/)

Install Bower ```npm install -g bower```

### Set Up Firebase
Create an account [here](http://www.firebase.com)

Create an app and open it.

On the left hand side click "Security & Rules".

Copy the contents of server/firebase_rules.json into the rules field.

On the left hand side click "Login & Auth".

Select the "Email & Password" Tab and select the "Enable Email & Password Authentication" checkbox

### Installation

Clone the repo

```
git clone https://github.com/DeloitteDigitalDC/REX.git <projectName>
cd <project-name>
bower install && npm install
```

Optionally, to remove git commit history

```
rm -rf .git
```

### Configure App

The app can be configured in two ways. 

The first way is to use Environment Variables.

The second way is to add a "settings.json" file to /server/settings.json.

Property      | Description                   | Example
------------- | ----------------------------- | ----------------------------------------------
FIREBASE      | the link to your firebase app | https://your-firebase-app-name.firebaseio.com/
FDA_KEY       | your open fda key             | ajljfakshfus83j29342l34s0d9f09sdf
PORT          | the server port               | 3000


### Commands

##### To start the development server

```
npm run server
```

##### To run unit tests

```
npm run test // all tests
```

```
npm run test-client // just client side tests
```

```
npm run test-server // just server side tests
```

##### To build app for deployment

This will create a folder called /dist which will contain server/ and client/.

```
npm run build
```

To start the server for production navigate to the dist folder and run ```node ./server/app-server.js```

##### Generate documentation

```
npm run docs
```