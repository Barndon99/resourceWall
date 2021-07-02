# Resource Wall (Pinit)
![Gif of Project]()
## Contributors
 
`Brandon Rowlandson` [@Barndon99](https://github.com/Barndon99)
 
`Ross Clamp` [@mandatoryrecess](https://github.com/mandatoryrecess)
 
`Leam Murphy` [@Chulainn1](https://github.com/Chulainn1)
 
## About The Project
Pinit is a web app designed to allow learners to save resources like, tutorials, blogs and videos in a central place that is publically available to any user.
 
`Pinterest for learners`
 
We regularly find ourselves saving the resources provided to us in compass and those that we find ourselves to a bookmarked folder. However, once saved, we found it difficult to find a particular resource considering the amount and their varying categories. We created an application where you categorize your resources and make them publically available for other users to save, rate and reference. This would save time in the long run for users who are just starting out in a particular field/hobby, allowing them to access the most useful resources by leaning on the expertise of the collective.
 
## Steps We Took

The project goal was to complete the MVD (minimum viable demo) within one week. To do this, we first created `user stories` by asking ourselves how a user will interact with our application.
 
For example:
 
***As a user I need to be able to save an external URL along with title, description and category because I want to share them with peers.***
 
We proceeded to make an `ERD(Entity Relationship Diagram)`, using the user stories to build out our database with entities.
 
![ERD image]()
 
From there we brainstormed the `routes` required to perform *BREAD* operations on the resources.
 
Last but not least we created `wireframes` for the structure of our web pages with the intention of making it easier to build the pages.
 
![wireframe images]()

## Features 
**The main features include the following:**
```
1. Users can save an external URL along with a title, description, and an image.
 
2. Users can search and browse the resources created by other users.
 
3. Users can categorize a resource under a topic.
 
4. Users can comment on any resource.
 
5. Users can rate any resource.
 
6. Users can register, log in, and log out.
``` 
 
## Getting Started
 
1. Clone the repo: `git@github.com:Barndon99/resourceWall.git`
2. Install dependencies: `npm i`
3. Within psql create a database called midterm: `CREATE DATABASE midterm`
4. Enter the database: `\c midterm`
5. Seed the datbase: `\i db/schema/01_users.sql`
6. Run the server: `npm run local`
    - Note: nodemon is used, so you should not have to restart your server 
7. Visit `http://localhost:8080/`
 
## Dependencies
 
- body-parser ^1.19.0
- chalk ^2.4.2
- cookie-session ^1.4.0
- cookie-sessions 0.0.2
- dotenv ^2.0.0
- ejs ^2.6.2
- express ^4.17.1
- morgan ^1.10.0
- node-sass-middleware ^0.11.0
- pg ^8.5.0
- pg-native ^3.0.0
 
### devDependencies
- nodemon ^1.19.4
 
 
## Known Bugs
 
- []
- []
- []
- []

## Future Updates

- [] Add styling to login/register pages.
- [] Error handling.
- [] Add update user profile.
- [] Add new category. 
- [] Leave a rating on a resource.
- [] Should be able to save a resource only once. 
- [] Display timestamps on comments and created resources.
- [] Add more search functionality i.e. by rating, by resource. 
