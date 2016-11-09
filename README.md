# Blog - TDD

### Installation
```sh
npm install
```
### package.json
```json
{
  "name": "blog-tdd",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "chai": "^3.5.0",
    "chai-http": "^3.0.0",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "dotenv": "^2.0.0",
    "express": "~4.13.4",
    "express-session": "^1.14.2",
    "jade": "~1.11.0",
    "mocha": "^3.1.2",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.6",
    "morgan": "~1.7.0",
    "passport": "^0.3.2",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.0.0",
    "serve-favicon": "~2.3.0"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}
```
### Tree View
```sh
.
├── app.js
├── bin
│   └── www
├── controller
│   └── controller.js
├── models
│   ├── article.js
│   └── user.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── README.md
├── routes
│   ├── api.js
│   └── index.js
├── test
│   └── route.test.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

10 directories, 13 files
```


### Routes

Endpoint | HTTP | Description
---------|------|------------
`http://localhost:3000/api/article` | GET | View All Articles
`http://localhost:3000/api/article` | POST | Create New Article
`http://localhost:3000/api/article/:id` | PUT | Update Article by Id
`http://localhost:3000/api/article/:id` | DELETE | Delete Article By Id

### License
MIT
