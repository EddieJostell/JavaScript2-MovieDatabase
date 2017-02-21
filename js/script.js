
//MovieDatabase Module Pattern


const dataBase = (() => { 

	let movies = [ 
	{
		title: "Assassins Creed",
		year: 2016,
		genres: ["Action", "Adventure", "Fantasy"],
		ratings: [0,2,5,8,9,1,3,4,6,3]
	},

	{
		title: "Jason Bourne",
		year: 2016,
		genres: ["Action", "Thriller"],
		ratings: [6,6,7,8,9,2,4,3,2,6]
	},

	{
		title: "Waterworld",
		year: 1995,
		genres: ["Action", "Adventure", "Sci-Fi"],
		ratings: [8,9,6,5,7,8,6,7,5,9]
	},

	{
		title: "Blade Runner",
		year: 1982,
		genres: ["Sci-Fi", "Thriller"],
		ratings: [9,8,9,7,9,8,9,8,9]
	},

	{
		title: "The Big Lebowski",
		year: 1998,
		genres: ["Comedy", "Crime", "Mystery"],
		ratings: [9,9,9,9,8,8,7,6,8,5]
	},

	{
		title: "Pulp Fiction",
		year: 1994,
		genres: ["Crime", "Drama"],
		ratings: [9,5,7,9,8,8,7,6,8,5]
	},


	];
	return {
		listMovies: () => {
			return movies;
		},
		pushMovie: (movie) => {
			movies.push(movie);
		}
	}


})();


//Movie Constructor
function createMovie() {

	const MovieConstructor = function(title, year, genres) {
		this.tile = tile;
		this.year = year;
		this.genres = genres;
	};


};
createMovie();

//var wardogs = new MovieConstructor("War Dogs", 2016, ["Comedy", " Crime", " Drama"], 90000);

MovieConstructor.prototype.listMovie = function() {
	//console.log("This is " + wardogs.title + " made in " + wardogs.year + " listed as a " + wardogs.genres + " and it has a rating of " + wardogs.ratings);
}
//MovieConstructor.prototype.listMovie();


dataBase.pushMovie(new MovieConstructor("War Dogs", 2016, ["Comedy", " Crime", " Drama"]));
console.log(dataBase.listMovies());











const rateMovie = (movie, ratings) => {

}

const getTopRatedMovie = (ratings)  => {

}

const getWorstRatedMovie = () => {

}

const getMoviesThisYear = (year) => {

}

const getMoviesByGenre = (genres) => {

}