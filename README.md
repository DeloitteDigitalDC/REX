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

The app can be configured in two way. 

The first way is to use Environment Variables.

The second way is to add a "settings.json" file to /server/settings.json.

Property      | Description                   | Example
------------- | ----------------------------- | ----------------------------------------------
FIREBASE      | the link to your firebase app | https://your-firebase-app-name.firebaseio.com/
FDA_KEY       | your open fda key             | ajljfakshfus83j29342l34s0d9f09sdf
PORT          | the server port               | 3000


### Commands

To start the development server

```
npm run server
```

To run unit tests

```
npm run test
```

To build app for deployment

```
npm run build
```

Generate documentation

```
npm run docs
```