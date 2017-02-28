// TEST FILE

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
const eddieMovieDatabase = (() => { let MovieDatabase = {

	movies : [ 
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
		ratings: [9,8,9,7,9,8,9,8,9,8]
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

	]
};


return {
       
		//Pushes a created movie to the array
		pushMovie: (movie) => {
			MovieDatabase.movies.push(movie);
		},
		//Show the list of movies in the "database"
		getMovies: () => {
			return MovieDatabase.movies;
		},
		//Collects the title from a movie and displays it
		getTitle: (x) => {
			return MovieDatabase.movies[x].title;
		},
		//Collects the year from a movie and displays it
		getYear : (x) => {
			return MovieDatabase.movies[x].year;
		},
		//Collects genres
		getGenres : (x) => {
			return MovieDatabase.movies[x].genres;
		},
		//Collects the ratings for the movie
		getRate : (x) => {
			return MovieDatabase.movies[x].ratings;
		},

	};


})();

eddieMovieDatabase.pushMovie(new MovieConstructor("War Dogs", 2016, "Comedy, Crime, Drama", 9));
console.log(eddieMovieDatabase.getMovies());
console.log(eddieMovieDatabase.getTitle());


// Function to display the movie in HTML
function showMovies() {

	movieUL.innerHTML = "";
	for (var i = 0; i < eddieMovieDatabase.getMovies().length; i++) {
		var blockofMovies = `<div class="movieDIV">
		<p>Title : ${eddieMovieDatabase.getTitle(i)}</p>
		<p>Release Year : ${eddieMovieDatabase.getYear(i)} </p>
		<p>Genres : ${eddieMovieDatabase.getGenres(i)} </p>
		<p>Rating : ${eddieMovieDatabase.getRate(i)} </p>
		</div>`;
		movieUL.innerHTML += blockofMovies;
	};

}

showMovies();


function createMovie() {
	



	/*
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
    */

}
//createMovie();


/*
	movieUL.innerHTML = "";
			for (var i = 0; i < eddieMovieDatabase.getMovies().length; i++) {
				var blockofMovies = `<div class="movieDIV">
				<p>Title : ${eddieMovieDatabase.getTitle(i)}</p>
				<p>Release Year : ${eddieMovieDatabase.getYear(i)} </p>
				<p>Genres : ${eddieMovieDatabase.getGenres(i)} </p>
				<p>Rating : ${eddieMovieDatabase.getRate(i)} </p>
				</div>`;
				movieUL.innerHTML += blockofMovies;
			};
		}
		*/



/*const ratingCal = (arr) => {
	let length = arr.length
	console.log(length);
	sum = arr;
	let calc = 0
	for (var i = 0; i < arr.length; i++) {
		calc+=sum[i];
		console.log(sum);
		return calc/length;
	}
}*/






document.getElementById("btnAdd").addEventListener("click", createMovie);
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


//Movie Constructor

/*const MovieConstructor = function(title, year, genres, ratings) {
	this.title = title;
	this.year = year;
	this.genres = [genres];
	this.ratings = [ratings];
};*/


//var wardogs = new MovieConstructor("War Dogs", 2016, ["Comedy", " Crime", " Drama"], 90000);

/*MovieConstructor.prototype.listMovie = function() {
	//console.log("This is " + wardogs.title + " made in " + wardogs.year + " listed as a " + wardogs.genres + " and it has a rating of " + wardogs.ratings);
}*/
//MovieConstructor.prototype.listMovie();