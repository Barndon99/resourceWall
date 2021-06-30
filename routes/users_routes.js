const { promiseImpl } = require('ejs');
const { response } = require('express');
const express = require('express');
const router  = express.Router();

const userRouter = (db) => {
  router.get("/", (req, res) => {
      res.redirect(`/user/${req.session.user_id}`);
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log("HERE");
    Promise.all([db.query(`SELECT * FROM users WHERE users.id = ${id};`), db.query(`
    SELECT resources.*, users.id as userId, resources.id as id
    FROM resources
    JOIN users ON resources.owner_id = users.id
    WHERE resources.owner_id = ${id};
    `), db.query(`
    SELECT resources.*, users_resources.guest_id as guestId
    FROM resources
    JOIN users_resources ON users_resources.resource_id = resources.id
    WHERE users_resources.guest_id = ${id};
    `)])
      .then((response) => {
        const userInfo = response[0].rows[0];
        const ownedResources = response[1].rows;
        const savedResources = response[2].rows;
        console.log("USER INFO: ", userInfo, "OWNED RESOURCES: ", ownedResources, "SAVED RESOURCES: ", savedResources);
        const templateVars = { user: userInfo, owned: ownedResources, saved: savedResources};
        res.render('user_page', templateVars);
      })
  });
  return router;
}

module.exports = userRouter;
