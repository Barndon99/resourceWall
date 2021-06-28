const { response } = require('express');
const express = require('express');
const router  = express.Router();

const resourceRouter = (db) => {
  router.get("/get", (req, res) => {
    db.query(`SELECT * FROM resources;`)
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
  })
  return router;
};

module.exports = resourceRouter;
