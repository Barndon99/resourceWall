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
    res.render('resource_page');
  });

  //router.get("/:id", (req, res) => {
  //  console.log("PARAMS", req.params.id);
  //  db.query('SELECT * FROM resources WHERE resources.id = ')
  //})

  return router;
};

module.exports = resourceRouter;
