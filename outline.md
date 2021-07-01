# Resource Wall

**For mid-terms, we want to focus on the MVD, the Minimum Viable Demo. If you aren't going to demo it, don't build it**

- [] users should be able to save an external URL along with a title and description
- [x] users should be able to search for already-saved resources created by any user
- [x] users should be able to categorize any resource under a topic
- [] users should be able to comment on any resource
- [x] users should be able to rate any resource
- [x] users should be able to view all their own and all liked resources on one page ("My resources")
- [x] users should be able to register, log in, log out and update their profile

## User Stories

***Describe how users will interact with you application***

* As a user and avid learner I want to efficiently access the useful resources I have currated over the years for my various hobbies, because I want to be able to refference them and share them with like minded individuals. 

* As a user I recognize that bookmarks just don't suffice and I need more descriptive organization for my resources. 

* As user I need to be able to `save` an external `URL` along with `title`, `description` and `category` because I want to share them with peers.

* As a logged in user I need to be able find saved resources by any user because I wish to access those saved resources.

* As a logged in user I need to find saved resources by category, because I want to find resources pertaining to my interests.

* As a logged in user I need to `comment` on any resource because I want my thoughts to be known (this will help you with ____).

* As a logged in user I need to `rate` any resource because I want to let others know how helpful/unhelpful/suggestions it was.

* As a logged in user I need to `like` any resource because others should know the popularity of the resource.

* As a logged in user I need to view my liked and created resources because I want easily access and store my resources

* As a logged in user I want to `register`, `login`, `logout` and `update` my profile because my info can change and I wish to protect my saved resources. 

## User Scenarios

* 
* 
* 
* 

## ERD/Entities

1. `users`: id, name, email, password, profile_img_url

2. `resources`: id, category_id, owner_id(user_id), title, description, url, resource_img_url

3. `users_resources`: id, user_id(guest_id), resource_id

4. `resources_rating`: id, user_id, resoure_id, rating

5. `resources_comments`: id, user_id(guest_id), resource_id, comments

6. `categories`: id, name, category_img_url, number_of_resources

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

We have lots of plans 


### Presentations

1. Why did we choose to make a "Resource Wall"? 
    * We immediately recognized the utility of this project. On a daily if not hourly basis we find ourselves saving the resources provided to us in compass and those that we find ourselves to a bookmarked folder. However, once saved, we found it difficult to find a particular resource considering the amount and their varying categories. We created an application where you categorize your resources and make them publically available for other users to save, rate and reference. This would save time in the long run for users who are just starting out in a particular field/hobby, allowing them to access the most useful resources by leaning on the expertise of the collective. 

2. How did we all participate in creating this web app? 
    * Through a combitation of dividing the work vertically and routine pair-programming we achieved our MVD. The major divides were Rossanne on front-end, Brandon on the routes and Leam on the database. 

3. How to Demo
  * Personal intro/why you are excited/why you liked working on this project

  * Run through main features in layman terms (overview)
    * database w/ 6 tables (users, resources, users_resources, categories, comments, ratings)
    * This is not a SPA and relies on routes/pages to display the `categories`, `resource`, `saved_resources` and, `owned_resources` pages. Similar to the tweeter project, data is appeneded to the html. 
    * Saving a resource 
    * Commenting on a resource
    * Rating a resource
    * `Stretch` Creating a resource 
    * `Stretch` Creating a category 


  * Share screen w/ project running
    * anounce who will screen share/navigate and who will explain (___ will be sharing their screen and navigating {project name} as I go through its main features)

  * Talk about UI decisions we made. Run through the user experience as a new user and how using this app benefits them/others (we can switch speakers here).
  
      * The user interface is welcoming and straight forward to use. We wanted new users to see what this app offers as soon as they enter the site so we decided the main page should contain the categories available/most popular categories. 

      * The categories and resources, take the form of clickable cards, which provides an element of familiarity for those who have used pintrest.

      * Displaying a title, description, comments and an average rating for each resource makes it easy for users to decide if they should spend their time reading that resource, allowing them to find the answer they need more efficently. This also creates a sense of community, encouraging beginners, hobbiest and professionals alike to engage. 

      * The users page displays the resources you created and the resources you saved from other users. This is intended to make finding and sharing the resources you found useful more efficient. `Stretch` Ideally you would be able to share your resources through a currated category - kind of like a playlist of the best resources for ____. 

      * The popart/comicbook theme injects a sense of lightheartedness and adds an element of vibrancy to an app that organizes your bookmarks. 

  * mention any stretch features accomplished
    * add
    * them
    * stretches

  * mention stretch features we didn't get too but would like to add. 
    * Login animation 
    * Search bar

4. What are some challenges we overcame during this project (lessons learned)? 
    * git (fetch/merge, working on branches and creating pull requests)
    * Working as a coding team for the first time - dividing the work(wearing your own hat), regular check-ins, relying on others to do their part.
    * gained a better understanding of how everything connects compared to before when understanding was fragmented.
