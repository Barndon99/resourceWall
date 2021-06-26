# Resource Wall
* users should be able to save an external URL along with a title and description
* users should be able to search for already-saved resources created by any user
* users should be able to categorize any resource under a topic
* users should be able to comment on any resource
* users should be able to rate any resource
* users should be able to like any resource
* users should be able to view all their own and all liked resources on one page ("My resources")
* users should be able to register, log in, log out and update their profile

## User Stories

`Describe how users will interact with you application`

As a avid learner I want to efficiently access the useful resources I have currated over the years for my various hobbies, because I want to be able to refference them and share them with like minded individuals. 

Bookmarks just don't suffice because I need more descriptive organization for my resources. 

As user I need to be able to save an external URL along with title, description and category because I want to share them with peers.

As a logged in user I need to be able find saved resources by any user because I wish to access those saved resources.

As a logged in user I need to find saved resources by category, because I want to find resources pertaining to my interests.

As a logged in user I need to comment on any resource because I want my thoughts to be known (this will help you with ____).

As a logged in user I need to rate any resource because I want to let others know how helpful/unhelpful/suggestions it was.

As a logged in user I need to like any resource because others should know the popularity of the resource.

As a logged in user I need to view my liked and created resources because I want easily access and store my resources

I want to register, login, logout and update my profile because my info can change and I wish to protect my saved resources. 


## Entities

1. `users`: id, name, email, password, profile_img_url

2. `resources`: id, category_id, owner_id(user_id), url, resource_img_url

3. `users_resources`: id, user_id(guest_id), resource_id

4. `resources_rating`: id, user_id, resoure_id, rating

5. `resources_comments`: id, user_id(guest_id), resource_id, comments

6. `categories`: id, name, category_img_url, number_of_resources

### times_saved
SELECT resources, COUNT(users_resources)
JOIN users_resources
JOIN users
WHERE users_resources.resource_id = resources.id 

To Do:

1. dummy user always logged in
2. generate categories - map HTML, seed 9 of those categories(db: add 5 resources)
3. Route to login( 
```JS 
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
}); // within router.js
```
4. users/:id - build ejs template
5. pool.query in server.js to return saved resources
6. register login functionality(with dope animation)
7. create new resources
8. create new categories

#### STRETCH