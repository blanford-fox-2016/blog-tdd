# Blog with Express and TDD
Implement testing  Restful API with Mocha.js and Chai.js in TDD - Test Driven Development

## How To Use
1. npm install
2. mocha (for test)

## Dependency
1. mocha.js : ```npm i -D mocha```
2. chai.js : ```npm i -S mocha```
3. express : ```npm i -g express```
4. mongodb : ```npm i -S mongodb```
5. mongoose : ```npm i -S mongoose```
6. passport : ```npm i -S passport```
7. passport-local : ```npm i -S passport-local```
8. passport-local-mongoose : ```npm i -S passport-local-mongoose```
9. chai-http : ```npm i -S chai-http```

## Databases Configuration
1. Database's name : db_blog
2. Database's collections :
    * Users
      * username (string)
      * password (string)
    * Articles
      * content (string)

## End Point RESTful API Routes
Default development host & port : http://localhost:3000

| Routes | HTTP | Description |
|--------|------|-------------|
| api/users | GET | get respond JSON of all users's data  |
| api/users | POST | process & get respond JSON the new user's data |
| api/users/:id | PUT | process & get respond JSON the edited user's data |
| api/users/:id | DELETE | process & get respond JSON the deleted user's data |
| api/articles | GET | get respond JSON of all articles's data  |
| api/articles | POST | process & get respond JSON the new blog's data |
| api/articles/:id | PUT | process & get respond JSON the edited blog's data |
| api/articles/:id | DELETE | process & get respond JSON the deleted blog's data |

## File Structure
```
```

## Package JSON
```
```

## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
