const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const routes = require('./routes');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//Routes

//Home Route
app.get('/', routes.home);

//Movie Single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//Not Found
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);