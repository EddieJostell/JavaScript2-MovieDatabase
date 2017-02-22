//Movie Constructor

const MovieConstructor = function(title, year, genres, ratings) {
	this.title = title;
	this.year = year;
	this.genres = [genres];
	this.ratings = [ratings];
};


//var wardogs = new MovieConstructor("War Dogs", 2016, ["Comedy", " Crime", " Drama"], 90000);

MovieConstructor.prototype.listMovie = function() {
	//console.log("This is " + wardogs.title + " made in " + wardogs.year + " listed as a " + wardogs.genres + " and it has a rating of " + wardogs.ratings);
}
//MovieConstructor.prototype.listMovie();


//MovieDatabase Module Pattern
const MovieDatabase = (() => { 

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

	{
		title: "Fight Club",
		year: 1999,
		genres: ["Drama"],
		ratings: [9,9,7,8,6,7,8,8,7,6] 
	}

	];

	
	
	return {
		getMovies: () => {
			return movies;
		},
		pushMovie: (movie) => {
			movies.push(movie);
		},
		pushAnotherMoive: (movie) => {
			movies.push(movie)
		},
		getTitle: (x) => {
			return movies[x].title;
		},
		getYear : (x) => {
			return movies[x].year;
		},
		getGenres : (x) => {
			return movies[x].genres;
		},
		getRate : (x) => {
			return movies[x].ratings;
		}
	};


})();

MovieDatabase.pushMovie(new MovieConstructor("War Dogs", 2016, "Comedy, Crime, Drama", 9));
MovieDatabase.pushAnotherMoive(new MovieConstructor("Rambo: First Blood", 1982, " Action, Adventure, Drama", 7));
console.log(MovieDatabase.getMovies());




function showMovies() {




/*
	const displayMovies = () => {

	}
	  for (var i = 0; i < Movies.getMovies().length; i++) {
var filmBlock =
`<ul id="">
<li>Title : ${Movies.getTitle(i)}</li>
<li>Release Year : ${Movies.getYear(i)} </li>
<li>Genres : ${Movies.getGenres(i)} </li>
<li>Rating : ${Movies.getRate(i)} </li>
</ul>`;
movieUL.innerHTML += filmBlock;
};
*/
}

//showMovies();

/*
function createMovie() {
	//Title
	var movieInput = document.getElementById("inputTitle").value;
	var txtMovie = document.createTextNode(movieInput);

	var yearInput = document.getElementById("inputYear").value;
	var txtYear = document.createTextNode(yearInput);

//Movie title
var li = document.createElement("li");
li.style.color = "white";
li.style.fontFamily = "Agency FB";
li.style.listStyleType = "none";
li.style.wordWrap = "break-word";
li.appendChild(txtMovie);
li.appendChild(txtYear);
if (movieInput === "") {
	alert("You have to write something!");
}
else {

	document.getElementById("movieUL").appendChild(li);
}
    //document.getElementById("movieInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode(" ");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


}
//createMovie();
*/







//document.getElementById("btnAdd").addEventListener("click", createMovie);
document.getElementById("btnShow").addEventListener("click", showMovies);







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