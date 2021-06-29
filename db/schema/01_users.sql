-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS users_resources CASCADE;
DROP TABLE IF EXISTS resource_ratings CASCADE;
DROP TABLE IF EXISTS resource_comments CASCADE;



CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_image VARCHAR(255),
  timestamp TIMESTAMP
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  category_img VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP
);

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR(500) NOT NULL,
  resource_img_url VARCHAR(500) NOT NULL,
  timestamp TIMESTAMP
);

CREATE TABLE users_resources (
  id SERIAL PRIMARY KEY NOT NULL,
  guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  timestamp TIMESTAMP
);

CREATE TABLE resource_ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  rating INTEGER NOT NUll,
  timestamp TIMESTAMP
);

CREATE TABLE resource_comments (
  id SERIAL PRIMARY KEY NOT NULL,
  guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  comments VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP
);


\i db/seeds/01_users.sql
\i db/seeds/02_categories.sql
\i db/seeds/03_resources.sql
\i db/seeds/04_user_resources.sql
\i db/seeds/06_resource_ratings.sql
\i db/seeds/07_resource_comments.sql
