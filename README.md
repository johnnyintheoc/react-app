## React App showing page Routing, API fetches, and MYSQL save/queries

Created using

```javascript
npx create-react-app [APP_NAME]
npm install react-router-dom, googleapis, mysql
npm start
```

Dependencies

```BrowserRouter, Switch, Route, react-dom, mysql```


Giveaway Page

* Uses YouTube API (googleapis) library
* Get your API_KEY from your google developer account.
* API_KEY can be updated in 'yt-class.js` file.
* Class file (yt-class.js) created to handle keyword search, saving data to database, and exporting to JSON file (giveaways.json).
* Results from this page is fetched from /public/giveaways.json file.

```javascript
/src/components/yt-class.js
/src/components/yt-cron.js
node ./src/components/yt-cron.js
```

News Page

* Uses API from http://splashbase.co
* JSON data returned
* Clicking on an image will route to a details page to retrieve further JSON data using the ID


MySQL Database & Tables

* Connection files located under /config/connection.js
* Database: nodejs_db
* Table: yt

```javascript
CREATE TABLE `yt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `channel_id` varchar(50) DEFAULT NULL,
  `channel` varchar(50) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `vid_thumbnail` varchar(100) DEFAULT NULL,
  `pub_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```
