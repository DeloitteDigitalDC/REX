REX
=================

### Prerequisites

Install [NodeJs](https://nodejs.org/)

Install Bower ```npm install -g bower```

REX uses a SQlLite database which which is built with npm's internal version of node-gyp, and thus your system must meet [node-gyp's requirements](https://github.com/TooTallNate/node-gyp#installation).

For example:
  * On Mac OS X:
    * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported) (already installed on Mac OS X)
    * [Xcode](https://developer.apple.com/xcode/downloads/)
      * You also need to install the `Command Line Tools` via Xcode. You can find this under the menu `Xcode -> Preferences ->

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

Property       | Description       | Example                                    |  Default
-------------  | ----------------- | ------------------------------------------ | ----------------------------
SQLITELOCATION | SQLITE db to use  | /user/my-sqlite-location/database.sqlite3 | <project-name>/server/db/database.sqlite3
FDA_KEY        | your open fda key | ajljfakshfus83j29342l34s0d9f09sdf          | None
PORT           | the server port   | 8888                                       | 3000


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
