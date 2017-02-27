
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


//MovieDatabase Module Pattern
const eddieMovieDatabase = (() => { 

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
		//Movie constructor
		MovieConstructor: function(title, year, genres, ratings) {
			this.title = title;
			this.year = year;
			this.genres = [genres];
			this.ratings = [ratings];
		},
        // Function that just returns the movies in the array.
        getMovies: () => {
        	return movies;
        },
		//Pushes movies into the movies array.
		pushMovie: (movie) => {
			movies.push(movie);
		},
		//Adds a movie typed in from the interface.
		addMovieFromHTML: () => {
			var addTitle = document.getElementById("title").value;
			var addYear = document.getElementById("year").value;
			var addGenres = document.getElementById("genres").value;
			//var dropGenres = document.getElementById("dropgenres").value;
			var addRatings = document.getElementById("ratings").value;
          
			var movieFromHTML = new eddieMovieDatabase.MovieConstructor(addTitle, addYear, addGenres, addRatings);
			eddieMovieDatabase.pushMovie(movieFromHTML);
			eddieMovieDatabase.showMoviesOnHTML();

			var form = document.getElementById("emdb-form");
			form.reset();
			console.log(movies);
			console.log(addGenres);
			
		},
		//Creates a div with paragraphs per movie rom the array and shows it on the HTML page.
		showMoviesOnHTML: () => {

			movieUL.innerHTML = "";
			for (let i = 0; i < movies.length; i++) {
				var rating = eddieMovieDatabase.movieRateCalculator(movies[i].ratings);
				var blockofMovies = `<div class="movieDIV">
				<p>Title : ${movies[i].title}</p>
				<p>Release Year : ${movies[i].year}  </p>
				<p>Genre(s) : ${movies[i].genres} </p>
				<p>Rating : ${rating} </p>
				</div>`;
				movieUL.innerHTML += blockofMovies;
			};

		},
		showMoviesByGenre: (index) => {
			console.log(index);
		    var blockofMovies = '';
			//movieUL.innerHTML = "";
			
				var rating = eddieMovieDatabase.movieRateCalculator(movies[index].ratings);
				blockofMovies = `<div class="movieDIV">
				<p>Title : ${movies[index].title}</p>
				<p>Release Year : ${movies[index].year}  </p>
				<p>Genre(s) : ${movies[index].genres} </p>
				<p>Rating : ${rating} </p>
				</div>`;
				movieUL.innerHTML += blockofMovies;
		},
		showMoviesByYear: (year) => {
			console.log(year + " I AM THE BEST");
		    var blockofMovies = '';
			//movieUL.innerHTML = "";
			
				var rating = eddieMovieDatabase.movieRateCalculator(movies[year].ratings);
				blockofMovies = `<div class="movieDIV">
				<p>Title : ${movies[year].title}</p>
				<p>Release Year : ${movies[year].year}  </p>
				<p>Genre(s) : ${movies[year].genres} </p>
				<p>Rating : ${rating} </p>
				</div>`;
				movieUL.innerHTML += blockofMovies;
			
		},
		
		//Function that will calculate the medium value of all the ratings that the movies have.
		movieRateCalculator: (movieArray) => {
			let arrayLength = movieArray.length
			let totalSum = movieArray;
			let calcRate = 0;
			for (var i = 0; i < arrayLength; i++) {
				calcRate += totalSum[i];
			}
			let finalCalcRate = calcRate/arrayLength;
			let decimalfix = finalCalcRate.toFixed(1);
			return decimalfix;
		}, 
		sortByRating: (sortByHigh) => {
			
			var compareNumbers = function(a, b)  {
				var r1 = parseFloat(eddieMovieDatabase.movieRateCalculator(a.ratings));
				var r2 = parseFloat(eddieMovieDatabase.movieRateCalculator(b.ratings));
				console.log(typeof r1, typeof r2);
				if(r1 < r2) {
					return - 1;
				}
				if (r1 > r2) {
					return 1;
				}
				return 0;
			}
			if (sortByHigh) {
				
				movies = movies.sort(compareNumbers).reverse();
			}
			else {
				movies = movies.sort(compareNumbers);
			}
			eddieMovieDatabase.showMoviesOnHTML();   
		},

		sortByHighRating: () => {
			eddieMovieDatabase.sortByRating(true);
		},

		sortByLowRating: () => {
			eddieMovieDatabase.sortByRating(false);
		},
		
		sortByGenres: () => {

			let drop = document.getElementById("dropDownGenre").value;
			console.log(drop);
			movieUL.innerHTML = "";
			for (var i = 0; i < movies.length; i++) {
				if (movies[i].genres.indexOf(drop) !== - 1) {
					console.log(movies[i].title);
					eddieMovieDatabase.showMoviesByGenre(i);

				}

			}

       },

       sortByYear: () => {
                 let txtYear = document.getElementById("sortYear").value;
                 console.log(txtYear + " AND THEN???");
                 movieUL.innerHTML = "";
                 for (var i = 0; i < movies.length; i++) {
                 	if (parseInt(txtYear) === movies[i].year) {
                        console.log(txtYear + " Thats your number?");
                        eddieMovieDatabase.showMoviesByYear(i);
                 	}
                 }
       }

   };


})();

//eddieMovieDatabase.MovieConstructor();
//eddieMovieDatabase.MovieConstructor(new MovieConstructor("Rambo: First Blood", 1982, " Action, Adventure, Drama", 7));

//eddieMovieDatabase.pushAnotherMoive(new MovieConstructor("Rambo: First Blood", 1982, " Action, Adventure, Drama", 7)"War Dogs", 2016, "Comedy, Crime, Drama", 9));
console.log(eddieMovieDatabase.getMovies());
document.getElementById("btnAdd").addEventListener("click", eddieMovieDatabase.addMovieFromHTML);
eddieMovieDatabase.showMoviesOnHTML();
document.getElementById("allMovies").addEventListener("click", eddieMovieDatabase.showMoviesOnHTML);
document.getElementById("dropDownGenre").addEventListener("change", eddieMovieDatabase.sortByGenres);
document.getElementById("btnSortYear").addEventListener("click", eddieMovieDatabase.sortByYear);
document.getElementById("topRated").addEventListener("click", eddieMovieDatabase.sortByHighRating);
document.getElementById("lowRated").addEventListener("click", eddieMovieDatabase.sortByLowRating);




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



const rateMovie = (movie, ratings) => {

}



const getMoviesThisYear = (year) => {

}

