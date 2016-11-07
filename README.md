  # blog-tdd

  ### packageJSon

  ```
  {
    "name": "blog-tdd",
    "version": "0.0.0",
    "private": true,
    "scripts": {
      "start": "node ./bin/www"
    },
    "dependencies": {
      "body-parser": "~1.15.1",
      "chai": "^3.5.0",
      "cookie-parser": "~1.4.3",
      "debug": "~2.2.0",
      "ejs": "~2.4.1",
      "express": "~4.13.4",
      "mocha": "^3.1.2",
      "morgan": "~1.7.0",
      "serve-favicon": "~2.3.0"
    }
  }


  ```

  |Routes | http  | Description|  
  |---|---|---|---|
  |/blog/auth/login   | GET  |   |    
  |/blog/auth/signup   | POST   |   |    
  |/blog/article  | GET  |   |    
  |/blog/article/:id   | DELETE   |   |   
  |/blog/article/:id  | PUT  |   |    
  |/blog/article/:id   | POST   |   |   
