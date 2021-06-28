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
  // Change index to resource page
  router.get("/", (req, res) => {
    res.render('index');
  });
  // Create a new resource (needs a form)
  //router.post("/new", (req, res) => {
  //  const
  //  db.query("INSERT INTO resources")
  //})
  return router;
};

module.exports = resourceRouter;
