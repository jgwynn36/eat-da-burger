const express = require("express");
const hbs = require("express-handlebars");
const sql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + 'public'));

// Parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.engine("handlebars", hbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: ${PORT}`);
});