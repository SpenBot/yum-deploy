# yum-deploy
deploy version of yum project


## NOTE

- configurations differ from review-file
  - should be more up-to-date and removed deprecated code on back-end.


## FEATURES TO ADD

- Sort search results and index (by name-alpha, type-alpha, city-alpha,)
  + [ probably much easier with better Front-End frameworks. ]
- Stack search queries
  - be able to filter searches by multiple queries (chinese that delivers in 20815)
  + [ probably super hard ]
- auto-fill suggestions for NEW documents (will suggest 'type', or 'city', or 'zipcode')
  + [ also probably super hard ]
- Text field searching (type something in to search)
  + [ maybe not too hard, unless you want to parse for spelling mistakes or close matches]


## DEPLOYING NOTES

- copy over to new directory
- npm install
- run mongod, mongo, and nodemon to check application

- create new db in mLab (AWS, sandbox, <db-name>)
- add db user

- $ heroku create <app-name>

- update index.js file

      ```js
      app.set('port', process.env.PORT || 3001)

      app.listen(app.get('port'), () => {
        console.log(`✅ PORT: ${app.get('port')} 🌟`)
      })
      ```
- update connection.js file

      ```js
      if (process.env.NODE_ENV == "production") {
        mongoose.connect(process.env.MLAB_URL)
      } else {
        mongoose.connect("mongodb://localhost/whenpresident");
      }
      ```

- make Procfile

- configure heroku to use mLab db
   - $ heroku config:set MLAB_URL=mongodb://<your_user_login>:<your_user_password>@ds015760.mlab.com:15760/<your_db_name>

- git commit to github master





>> END <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
