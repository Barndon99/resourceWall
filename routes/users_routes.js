const { response } = require('express');
const express = require('express');
const router  = express.Router();

const userRouter = (db) => {
  router.get("/", (req, res) => {
      res.redirect(`/user/${req.session.user_id}`);
  });

  router.get('/:id', (req, res) => {
    const id = req.session.id;
    db.query(`SELECT * FROM users WHERE users.id = ${req.params.id};`)
      .then((response) => {
        console.log(response.rows[0]);
        const templateVars = { user: response.rows[0]};
        res.render('user_page', templateVars);
      })
  })

  router.get("/:id/owned_resources", (req, res) => {
    //users id will need to be a variable
    const id = req.params.id;
    console.log(id);
    db.query(`
      SELECT resources.*, users.id as userId, resources.id as id
      FROM resources
      JOIN users ON resources.owner_id = users.id
      WHERE resources.owner_id = ${id};
    `)
      .then((response) => {
        console.log(response.rows);
        res.send(response.rows);
      });
  });

  router.get("/:id/saved_resources", (req, res) => {
    const id = req.params.id;
    db.query(`
      SELECT resources.*, users_resources.guest_id as guestId
      FROM resources
      JOIN users_resources ON users_resources.resource_id = resources.id
      WHERE users_resources.guest_id = ${id};
    `)
      .then((response) => {
        res.send(response.rows);
      })
  });

  return router;
}

module.exports = userRouter;
