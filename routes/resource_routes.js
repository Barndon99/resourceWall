const { response } = require('express');
const express = require('express');
const router  = express.Router();

const resourceRouter = (db) => {
  // create a new resource

  router.post("/new", (req, res) => {
    // console.log(req.body);
    // console.log(req.params)
    const categoryName = req.body.category[0][0].toUpperCase() + req.body.category[0].substring(1);
    console.log("category:", categoryName);
    const title = req.body.title;
    const description = req.body.description;
    const url = req.body.url;
    const resourceImgUrl = req.body.resource_img_url;
    db.query(`SELECT * FROM categories WHERE categories.name = '${categoryName}'`)
      .then((response) => {
        const id = response.rows[0].id;
        db.query(`INSERT INTO resources(category_id, owner_id, title, description, url, resource_img_url, timestamp)
        VALUES('${id}', 1, '${title}', '${description}', '${url}', '${resourceImgUrl}', current_timestamp);`)
        .then((response) => {
          console.log("RESPONSE: ", response)
          db.query(`SELECT * FROM resources WHERE resources.title = '${title}'`)
          .then((response) => {
            console.log(response);
            const templateVars = {resource: response.rows}
            res.render('resource_show', templateVars);
          })
        })
      })

  })

  // Change index to resource page
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.query(`SELECT resources.*, resource_comments.comments as comments, users.name as name FROM resources JOIN resource_comments ON resource_comments.resource_id = resources.id JOIN users on resource_comments.guest_id = users.id WHERE resources.id = ${id} LIMIT 3;`)
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
      res.json(response.rows);
      })
      .catch(err => {
        res
          .json({ error: err.message });
      });
  });

  router.post("/:id/new", (req, res) => {
    const id = req.params.id;
    const content = req.body.newComment;
    console.log(req.session.id);
    //req.session.uder_id
    db.query(`INSERT INTO resource_comments(guest_id, resource_id, comments, timestamp)
      VALUES('${req.session.user_id}', '${id}', '${content}', current_timestamp);
      `)
      .then((response) => {
      db.query(`SELECT resources.*, resource_comments.comments as comments, users.name as name FROM resources JOIN resource_comments ON resource_comments.resource_id = resources.id JOIN users on resource_comments.guest_id = users.id WHERE resources.id = ${id} LIMIT 3;`)
        .then((response) => {
          const templateVars = {resource: response.rows}
          res.render('resource_show', templateVars);
        })
      });
  });


  return router;
  // small comment
};

module.exports = resourceRouter;
