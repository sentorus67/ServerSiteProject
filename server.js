require('dotenv').config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers/index");

// helpers???
const hbs = exphbs.create({});

const sequelize = require("./config/config");
// const sequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//COOKIES
// const sess = {
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//       maxAge: 300000,
//       httpOnly: true,
//       secure: false,
//       sameSite: 'strict',
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };

// app.use(session(sess));
// fix my push

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

app.listen(PORT, () => console.log('Now listening'));