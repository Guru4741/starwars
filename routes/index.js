const moviesJSON = require('../movies.json');

//Home Route
exports.home = function(req,res){

	const movies = moviesJSON.movies;

	res.render('home', {
		title: 'Star Wars Movie',
		movies: movies
	}); 
};

//Movie Single
exports.movie_single = function(req, res){
	const episode_number = req.params.episode_number;
	const movies = moviesJSON.movies;

	if(episode_number >= 1 && episode_number <= 6){
		
		const movie = movies[episode_number - 1];
		const title = movie.title;
		const main_characters = movie.main_characters;
		
		res.render('movie_single',{
			movies: movies,
			title: title,
			movie: movie,
			main_characters: main_characters
		});	
	} else {
		res.render('notFound',{
			movies: movies,
			title: "This is not the page you are looking for"
		});
	}	
};

//Not Found
exports.notFound = function(req,res){

	const movies = moviesJSON.movies; 

	res.render('notFound',{
		movies: movies,
		title: "This is not the page you are looking for"
	})
};