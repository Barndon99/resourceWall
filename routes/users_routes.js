const { response } = require('express');
const express = require('express');
const router  = express.Router();

const userRouter = (db) => {
  router.get("/", (req, res) => {
    res.render('user');
  });

  router.get("/owned_resources", (req, res) => {
    //users id will need to be a variable
    db.query()
      .then((response) => {
      res.send(response.rows);
    })
  })

  router.get("/saved_resources", (req, res) => {
    db.quer()
      .then((response) => {
        res.send(response.rows);
      })
  });

  return router;
}

module.exports = userRouter;
