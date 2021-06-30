#### QUERIES WE NEED
Categories Page
  ->Resource Page (all resources by a category)
    ->Individual Resource page (panel)
  ->user page (saved resources)

Categores 
  -Select all categories
  -# of resources

 Resources
  -get all resources by category_id
  -get resource title
  -# of times saved

Individual Resource
  -get resource title, url (take me there button), description, rating
  -get resource comments with user_id, user_profile_pic, tablestamp

User Page
  -saved_resources by user
  -What category is this?

```SQL
-- categories --
SELECT * FROM categories;

-- this counts the number of resources in each category
SELECT categories.name as category, COUNT(resources.*) as num_of_resources
FROM resources 
JOIN categories ON resources.category_id = categories.id
GROUP BY categories.name;

-- resources --
SELECT * FROM resources 

-- this gets all the urls displayed by their category id
SELECT resources.url as link, categories.id as category_id
FROM resources
JOIN categories ON categories.id = category_id
ORDER BY categories.id;

-- this groups the resources urls by category name
SELECT resources.url as link, categories.name as category
FROM resources
JOIN categories ON categories.id = category_id
ORDER BY categories.name;

-- atm resources don't have a name/title so just used url
-- this counts the times a resource was saved
SELECT resources.id, COUNT(users_resources.resource_id) as times_saved, resources.url
FROM resources
JOIN users_resources ON resources.id = users_resources.resource_id
GROUP BY resources.id
ORDER BY times_saved DESC;

-- Individual Resource --
-- resources don't have a description and no title.

SELECT resources.url as link, 
resource_ratings.rating as rating, 
users.name as rating_owner
FROM resources 
JOIN resource_ratings ON resources.id = resource_id
JOIN users ON resource_ratings.owner_id = users.id
ORDER BY rating DESC;

-- this shows the comment on a specific resource at a 
-- specifc time by a specific user with a profile pic
SELECT resource_comments.comments as comment,
resource_comments.timestamp as time,
resource_comments.resource_id as resource,
users.name as user,
users.profile_image as img
FROM resource_comments
JOIN users ON resource_comments.guest_id = users.id;

-- User Page

SELECT resources.*, users.id as id
FROM resources
JOIN users ON users.id = resources.owner_id
WHERE users.id = 3;



-- How to query owner and guest at the same time?
-- I think we need to update the database as the
-- query is not no working properly for the last
-- 2 users
SELECT users.name, 
users.id as saver_id, 
resources.url as saved_link,
categories.name as category,
users_resources.timestamp as time_of_save,
resources.owner_id as owner_id
FROM resources
JOIN users_resources ON resources.id = users_resources.resource_id
JOIN users ON users.id = users_resources.guest_id
JOIN categories ON categories.id = resources.category_id
WHERE users.id = 1;


 
```
