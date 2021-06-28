/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { response } = require('express');
const express = require('express');
const router  = express.Router();

const categoryRouter = (db) => {
  router.get("/get", (req, res) => {
    db.query(`SELECT * FROM categories;`)
    .then(response => {
      console.log(response);
      return res.json(response.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/", (req, res) => {
    res.render('index');
  });

  router.get("/:resourceId", (req, res) => {
    console.log(req.params);
    res.redirect('/resources/:id');
  })

  return router;
};

module.exports = categoryRouter;
