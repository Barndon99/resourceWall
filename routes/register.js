const { response } = require('express');
const express = require('express');
const router  = express.Router();

const registerRouter = (db) => {


  router.get('/', (req, res) => {
    res.render('register.ejs');
  });

  router.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const profileImg = req.body.profileImg;

    db.query(`INSERT INTO users(name, email, password, profile_image, timestamp)
    VALUES('${name}', '${email}', '${password}', '${profileImg}', current_timestamp);
    `)
      .then(() => {
        res.redirect(302, '/login/');
      })
  })
  return router;
}

module.exports = registerRouter;
