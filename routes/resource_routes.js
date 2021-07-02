const { response } = require('express');
const express = require('express');
const router  = express.Router();

const resourceRouter = (db) => {
  // create a new resource
  router.post('/save', (req, res) => {
    const location = req.body.resourceId;
    const userId = req.session.user_id;
    if (userId) {
    db.query(`INSERT INTO users_resources(guest_id, resource_id, timestamp)
    VALUES('${userId}', '${location}', current_timestamp);`)
      .then((result) => {});
    } else {
      res.alert('Login Please');
    }
  });

  router.post("/new", (req, res) => {
    // console.log(req.body);
    // console.log(req.params)
    const categoryName = req.body.category[0][0].toUpperCase() + req.body.category[0].substring(1);
    const title = req.body.title;
    const description = req.body.description;
    const url = req.body.url;
    const resourceImgUrl = req.body.resource_img_url;
    const user_id = req.session.user_id;
    console.log("MADE IT IN NEW");
    db.query(`SELECT * FROM categories WHERE categories.name = '${categoryName}'`)
      .then((response) => {
        const id = response.rows[0].id;
        console.log("MADE IT IN FIRST RESPONSE");
        console.log("IMG URL: ", resourceImgUrl);
        //, owner_id, title, description, url, resource_img_url, timestamp
        //${user_id}, '${title}', '${description}', '${url}', '${resourceImgUrl}', current_timestamp
        db.query(`INSERT INTO resources (owner_id, category_id, title, description, resource_img_url, url, timestamp)
        VALUES (${user_id}, ${id}, '${title}', '${description}', '${resourceImgUrl}', '${url}', current_timestamp) RETURNING *;`)
        .then((response2) => {
          console.log("2nd QUERY", response2.rows);
          const newId = response2.rows[0].id;
          //const templateVars = {resource: response2.rows, user: req.session.user_id}
          //console.log(templateVars);
          //res.render('resource_show', templateVars);
          res.redirect(302, `/resources/${newId}`);
        })
      })
  });



  // Change index to resource page
  router.get("/:id", (req, res) => {
    console.log("******");
    const id = req.params.id;
    //JOIN users on resource_comments.guest_id = users.id || users.name as name
    db.query(`SELECT resources.*, resource_comments.comments as comments, users.name as name FROM resources LEFT JOIN resource_comments ON resources.id = resource_comments.resource_id LEFT JOIN users on resource_comments.guest_id = users.id WHERE resources.id = ${id} LIMIT 3;`)
    .then((response) => {
      //console.log(response.rows);
      const id = req.session.user_id;
      const resource = response.rows;
      console.log("🤮🤮🤮🤮🤮🤮🤮", response.rows[0]);
      const templateVars = {resource, user: id }
      //console.log("<<<<", templateVars);
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
    if (req.session.user_id) {
    db.query(`INSERT INTO resource_comments(guest_id, resource_id, comments, timestamp)
      VALUES('${req.session.user_id}', '${id}', '${content}', current_timestamp) RETURNING *;
      `)
      .then((response) => {
      //db.query(`SELECT resources.*, resource_comments.comments as comments, users.name as name FROM resources JOIN resource_comments ON resource_comments.resource_id = resources.id JOIN users on resource_comments.guest_id = users.id WHERE resources.id = ${id} LIMIT 3;`)
      //  .then((response) => {

          const templateVars = {resource: response.rows, user: req.session.user_id }
          console.log(templateVars.resource);
          res.redirect(302, `/resources/${id}`);
     //   })
      });
    } else {
      res.redirect(302, '/login');
    }
  });


  return router;
  // small comment
};

module.exports = resourceRouter;
