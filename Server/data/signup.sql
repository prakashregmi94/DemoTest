Create database signup;

use signup;

CREATE TABLE IF NOT EXISTS login (id serial primary key NOT NULL, username VARCHAR (255), password VARCHAR (255));
