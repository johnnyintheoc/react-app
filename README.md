## React App showing page Routing, API fetches, and MYSQL save/queries

This project demonstrates how to create a React website with front end routing. Data is served to the pages using Express as the back end routing that queries a MySQL database.

MySQL database is stored at remotemysql.com with a single table called "channels".

Youtube API data
Using Google APIs, a method was created to retrieve Youtube channel data based on keywords and saved to table "channels".
Database connection file located in /config/connection.js

```javascript
CREATE TABLE `channels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `channelId` varchar(100) DEFAULT NULL,
  `channelTitle` varchar(100) DEFAULT NULL,
  `videoId` varchar(100) DEFAULT NULL,
  `videoTitle` varchar(100) DEFAULT NULL,
  `thumbnailURL` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `publishedAt` datetime DEFAULT NULL,
  `pageName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

```javascript
youtubeAPI.js
getChannels.js
```

Installation
* Notice two package.json files. One located in the root, and the other under folder "client".
* These packages are required for running on Heroku.
* The package has "scripts" to "start" both servers.
* The root package has "heroku-postbuild" commands.
* The client package has "proxy" set to 5000.

```javascript
npx create-react-app [APP_NAME]
npm install react-router-dom, googleapis, mysql, express, body-parser
npm start
node server
```

Make sure to create a config file with your database settings and youtube keys. Example below.
```javascript
/config/config.js

const keys =  {
    host: "remotemysql.com",
    database: DATABASE_NAME,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    port: 3306,
    YoutubeApiKey: YOUTUBE_API_KEY
};
module.exports = keys;

```