/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { response, query } = require('express');
const express = require('express');
const router  = express.Router();

const categoryRouter = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM categories;`)
    .then(response => {
      const templateVars = { categories: response.rows };
      console.log("templatevars:", templateVars);
      return res.render('index', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log("ID", id);
    db.query(`SELECT resources.category_id as id, avg(resource_ratings.rating) as ratings, resources.title as title, categories.name as name
    FROM resources
    JOIN categories
    ON resources.category_id = categories.id
    JOIN resource_ratings
    ON resource_ratings.resource_id = resources.id
    WHERE resources.category_id = ${id}
    GROUP BY resources.category_id, resources.title, categories.name;`)
    .then(response => {
      const templateVars = { resources: response.rows };
      console.log("TEMPLATE VARS:", templateVars);
      return res.render('resource_page', templateVars);
    })
  });

  //router.get("/:categoryId/resources", (req, res) => {
  //  console.log("REQ PARAMS:", req.params);
  //  //db.query(`SELECT * FROM resources WHERE category_id = ${req.params.}`)
  //  res.render('resource_page', templateVars);
  //});

  return router;
};

module.exports = categoryRouter;
