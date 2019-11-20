const express = require('express');
const bodyParser = require('body-parser');

/*
let connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "gnf0NqfHSB",
    password: "6vh3vr6yX4", // YOUR_DB_PASSWORD update with your database password
    database: "gnf0NqfHSB", // YOUR_DB update this to reflect your database
});
*/

// Routes
const routeHandler = require('../routes/handler.js');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routeHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});

/*
<Route path="/tech" exact component={Tech} />
            <Route path="/tesla/:id" component={TeslaDetails} />
            <Route path="/tech/:id" component={TechDetails} />
            <Route path="/news/:id" component={NewsDetails} />
            */