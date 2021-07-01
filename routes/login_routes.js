const { response } = require('express');
const express = require('express');
const router  = express.Router();

const loginRouter = (db) => {
  router.get("/", (req, res) => {
    res.render('login_page');
  });

  router.post("/user", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(`SELECT users.id FROM users WHERE users.email = '${email}' AND users.password = '${password}';`)
      .then((response) => {
        const id = response.rows[0].id;

        req.session.user_id = id;
        res.redirect(302, `/user/${id}`);
      })
  });

  router.get('/logout', (req, res) => {
    req.session = null;

    res.redirect(302, '/categories');
  })
  return router;
}

module.exports = loginRouter;
