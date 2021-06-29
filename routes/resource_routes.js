const { response } = require('express');
const express = require('express');
const router  = express.Router();

const resourceRouter = (db) => {

  // Change index to resource page
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.query(`SELECT resources.*, resource_comments.comments as comments, users.name as name FROM resources JOIN resource_comments ON resource_comments.resource_id = resources.id JOIN users on resource_comments.guest_id = users.id WHERE resources.id = ${id}`)
    .then((response) => {
      console.log(response.rows);
      const templateVars = {resource: response.rows}
      res.render('resource_show', templateVars);
    });
    //res.render('resource_page');
  });

  router.get("/:id/get", (req, res) => {
    const resourceId = req.params.id;
    db.query(`SELECT * FROM resource_comments WHERE resource_comments.resource_id = ${resourceId};`)
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
  //router.get("/:id", (req, res) => {
  //  console.log("PARAMS", req.params.id);
  //  db.query('SELECT * FROM resources WHERE resources.id = ')
  //})

  return router;
  // small comment
};

module.exports = resourceRouter;
