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

  router.get("/:id", (req, res) => {
    console.log("PARAMS", req.params.id);
    db.query(`SELECT * FROM resources JOIN categories ON resources.category_id = categories.id WHERE categories.id = ${req.params.id};`)
      .then((response) => {
        return res.json(response.rows);
      })
  })
  // Create a new resource (needs a form)
  //router.post("/new", (req, res) => {
  //  const
  //  db.query("INSERT INTO resources")
  //})
  return router;
};

module.exports = resourceRouter;
