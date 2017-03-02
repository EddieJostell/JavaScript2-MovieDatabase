//MovieDatabase Module Pattern
//Valde att använda Module Pattern för att allt är så 
//smart organiserat och samlat på samma stället innnanför modulen.
//Vilket gör att inget är deklarerat i global scope.
//Väldigt enkelt att koppla funktionerna man skapar till modulen.
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
		title: "The Fifth Element",
		year: 1995,
		genres: ["Action", "Adventure", "Sci-Fi"],
		ratings: [9,9,9,9,9,9,10,8]
	},
	{
		title: "Poltergeist",
		year: 1982,
		genres: ["Fantasy", "Horror", "Thriller"],
		ratings: [9,9,9,9,7,8,6]
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
		title: "Titanic",
		year: 1997,
		genres: ["Drama", "Romance"],
		ratings: [7,6,8,5,7]
	}, 

	{
		title: "Fight Club",
		year: 1999,
		genres: ["Drama"],
		ratings: [9,9,7,8,6,7,8,8,7,6] 
	},
	{
		title: 'The Exorcist',
		year: 1973,
		genres: ['Horror','Thriller'],
		ratings:[7,8,8,9]
	},
	{
		title: 'Casino Royale',
		year: 2006,
		genres: ['Action','Adventure','Thriller'],
		ratings: [6,4,8,9,9,9,9]
	},

	{
		title:'Star Wars: Episode VI - Return of the Jedi',
		year: 1983,
		genres:["Action", "Adventure", "Fantasy"],
		ratings:[9,10,10,10,9]

	},
	{
		title: "Fury",
		year: 2014,
		genres: ["Action", "Drama", "War"],
		ratings: [8,9,9,6,7,8,9,8]
	},
	{
		title: "Gladiator",
		year: 2000,
		genres: ["Action", "Adventure", "Drama"],
		ratings: [10,10,10,10,10,10,10]
	}


	];

	return {
		//Movie constructor
		//Använde mig av Constructor pattern på min constructor för att 
		//skapa filmerna (objekten).
		//Den skapar objekt som då har prototyper, (javascripts sätt för att ärva egenskaper och metoder).
		//Valde detta pattern istället för factory pattern för att jag inte har 
		//behövt manipulera några prototyper direkt. 
		MovieConstructor: function(title, year, genres, ratings) {
			this.title = title;
			this.year = year;
			this.genres = genres.split(' ');
			this.ratings = [ratings];
		},
        // Function that just returns the movies in the array.
        getMovies: () => {
        	return movies;
        },
		//Pushes movies into the movies array when created by the interface.
		pushMovie: (movie) => {
			movies.push(movie);
		},
		//Adds a movie typed in from the interface.
		addMovieFromHTML: () => {
			let addTitle = document.getElementById("title").value;
			let addYear = document.getElementById("year").value;
			let addGenres = document.getElementById("genres").value;
			let addRatings = document.getElementById("ratings").value;
			let intRating = parseInt(addRatings);
			//If-statement to make sure no extreme high or low numbers go into the rating input.
			if (intRating > 10) {
				intRating = 10;
			}
			if (intRating < 0) {
				intRating = 0;
			}
			//If-statement that makes sure that a movie doesnt get added to the array
			//if you leave a field empty.
			if (addTitle === "" || addYear === "" || addGenres === "" || addRatings === "") {
				alert("All fields are required!");
				return;
			}
			else {
				let movieFromHTML = new eddieMovieDatabase.MovieConstructor(addTitle, addYear, addGenres, intRating);
				eddieMovieDatabase.pushMovie(movieFromHTML);
				eddieMovieDatabase.showMoviesOnHTML();
				eddieMovieDatabase.populateEditDropDown();

				let form = document.getElementById("emdb-form");
				form.reset();
			}

			
		},
		//Creates a div with paragraphs per movie from the array and shows it on the HTML page.
		showMoviesOnHTML: () => {

			movieUL.innerHTML = "";
			for (let i = 0; i < movies.length; i++) {
				let rating = eddieMovieDatabase.movieRateCalculator(movies[i].ratings);
				let blockofMovies = `<div class="movieDIV">
				<p>Title : ${movies[i].title}</p>
				<p>Release Year : ${movies[i].year}  </p>
				<p>Genre(s) : ${movies[i].genres} </p>
				<p>Rating : ${rating} </p>
				</div>`;
				movieUL.innerHTML += blockofMovies;
			};

		},
		showSortedMoviesOnHTML: (x) => {

			movieUL.innerHTML = "";
			for (let i = 0; i < x.length; i++) {
				let rating = eddieMovieDatabase.movieRateCalculator(x[i].ratings);
				let blockofMovies = `<div class="movieDIV">
				<p>Title : ${x[i].title}</p>
				<p>Release Year : ${x[i].year}  </p>
				<p>Genre(s) : ${x[i].genres} </p>
				<p>Rating : ${rating} </p>
				</div>`;
				movieUL.innerHTML += blockofMovies;
			};

		},
		//Function that prints out on the DOM a specific movie that was searched for by genre.
		showMoviesByGenre: (index) => {
			let blockofMovies = '';
			//movieUL.innerHTML = "";
			
			let rating = eddieMovieDatabase.movieRateCalculator(movies[index].ratings);
			blockofMovies = `<div class="movieDIV">
			<p>Title : ${movies[index].title}</p>
			<p>Release Year : ${movies[index].year}  </p>
			<p>Genre(s) : ${movies[index].genres} </p>
			<p>Rating : ${rating} </p>
			</div>`;
			movieUL.innerHTML += blockofMovies;
		},
		//Function that prints out on the DOM a specific movie that was searched for by year.
		showMoviesByYear: (year) => {
			let blockofMovies = '';
			//movieUL.innerHTML = "";
			
			let rating = eddieMovieDatabase.movieRateCalculator(movies[year].ratings);
			blockofMovies = `<div class="movieDIV">
			<p>Title : ${movies[year].title}</p>
			<p>Release Year : ${movies[year].year}  </p>
			<p>Genre(s) : ${movies[year].genres} </p>
			<p>Rating : ${rating} </p>
			</div>`;
			movieUL.innerHTML += blockofMovies;
			
		},
		//Function that will run if no movie with the year searched for is found in the database.
/*		noMovieByThisYear: () => {
			let blockofMovies = '';
		    movieUL.innerHTML = "";
			
			blockofMovies = `<h2>Sorry no movie with this premiere year is listed in the database</h2>`;
			movieUL.innerHTML = blockofMovies;
		},*/
		
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
		//Function that compares movieratings and lets you sort movies by highest and lowest rating.
		sortByRating: (sortByHigh) => {
			let sortedArray = [];

			for (var i = 0; i < movies.length; i++) {
				sortedArray.push(movies[i]);
			}
              //Compare function that look at the calculated median rating value of the first movie in the array 
              //and compare it against the value of the second movie.
              //Depending
              let compareNumbers = (a, b) =>  {
              	var r1 = parseFloat(eddieMovieDatabase.movieRateCalculator(a.ratings));
              	var r2 = parseFloat(eddieMovieDatabase.movieRateCalculator(b.ratings));
              	if(r1 < r2) {
              		return - 1;
              	}
              	if (r1 > r2) {
              		return 1;
              	}
              	return 0;
              }
              if (sortByHigh) {

              	sortedArray.sort(compareNumbers).reverse();
              }
              else {
              	sortedArray.sort(compareNumbers);
              }
              return eddieMovieDatabase.showSortedMoviesOnHTML(sortedArray);   
          },
          //Function that checks if you chosen to sort by Highest rating or not.
          sortByHighRating: () => {
          	eddieMovieDatabase.sortByRating(true);
          },
         //Function that checks if you chosen to sort by Lowest rating or not.
         sortByLowRating: () => {
         	eddieMovieDatabase.sortByRating(false);
         },

		//Function that lets you sort movies by what genres they are classed as.
		sortByGenres: () => {
			let drop = document.getElementById("dropDownGenre").value;
			if (drop === "") {
				return;
			}
			else {
				movieUL.innerHTML = "";
				for (var i = 0; i < movies.length; i++) {
					if (movies[i].genres.indexOf(drop) !== - 1) {
						eddieMovieDatabase.showMoviesByGenre(i);
					}
				}
			}
			
		},
        //Function that lets you sort movies by what year the movie had premiered.
        sortByYear: () => {
        	let txtYear = document.getElementById("sortYear").value;
        	let intYear = parseInt(txtYear);
        	if (txtYear === "") {
        		alert("Please enter a year!");
        		return;
        	}
        	movieUL.innerHTML = "";
        	for (var i = 0; i < movies.length; i++) {
        		if (intYear == movies[i].year) {
        			eddieMovieDatabase.showMoviesByYear(i);
        		}
        		/*else if (intYear !== movies[i].year) {
        			eddieMovieDatabase.noMovieByThisYear(i);
        		} */
        	}
        },
        //Function that populates the dropdown menu on the edit movie interface.
        populateEditDropDown: () => {
        	let dropDownMovies = eddieMovieDatabase.getMovies();
        	let edit = document.getElementById("selectedMovieTitle");
        	for (var i = 0; i < dropDownMovies.length; i++) {
        		let opt = document.createElement("option");
        		opt.innerHTML = dropDownMovies[i].title;
        		opt.value = dropDownMovies[i].title;
        		edit.appendChild(opt);
        	}

        },
        addMovieGenre: () => {
        	let selectedMovie = document.getElementById("selectedMovieTitle").value;
        	let genreToAdd = document.getElementById("dropDownEditGenre").value;
        	let theMovie;
        	for (var i = 0; i < movies.length; i++) {
        		if (selectedMovie === movies[i].title) {
        			theMovie = movies[i];
        		}
        	}
        	for (let i = 0; i < theMovie.genres.length; i++) {
        		if (genreToAdd === theMovie.genres[i]){
        			return;
        		}
        	}
        	//If no genre has been choosen nothing will happen.
        	//Else add chosen genre to the movie.
        	if (genreToAdd === "") {
        		alert("Please choose a genre!");
        		return;
        	}
        	else {
        		theMovie.genres.push(genreToAdd);
        		eddieMovieDatabase.showMoviesOnHTML();
        	}

        },
        removeMovieGenre: () => {
        	let selectedMovie = document.getElementById("selectedMovieTitle").value;
        	let genreToRemove = document.getElementById("dropDownEditGenre").value;
        	let currentMovie;
        	for (var i = 0; i < movies.length; i++) {
        		if (selectedMovie === movies[i].title) {
        			currentMovie = movies[i];
        		}
        	}
        	for (var x = 0; x < currentMovie.genres.length; x++) {
        		if (genreToRemove === currentMovie.genres[x]) {
        			currentMovie.genres.splice(x,1);
        		}
        	}
        	eddieMovieDatabase.showMoviesOnHTML();
        },
        //Function that allowes you to rate a movie in the database.
        rateMovie: () => {
        	let selectedMovie = document.getElementById("selectedMovieTitle").value;
        	let addedRate = document.getElementById("edRatings").value;
        	let intRate = parseInt(addedRate);
        	if (addedRate === "") {
        		alert("Please choose a number!");
        		return;
        	}
        	else {
        		for (var i = 0; i < movies.length; i++) {
        			if (selectedMovie === movies[i].title) {
        				movies[i].ratings.push(intRate);
        			}
        		}
        	}
        	eddieMovieDatabase.showMoviesOnHTML();
        }
    };
})();


//console.log(eddieMovieDatabase.getMovies());
eddieMovieDatabase.showMoviesOnHTML();
eddieMovieDatabase.populateEditDropDown();
document.getElementById("btnAdd").addEventListener("click", eddieMovieDatabase.addMovieFromHTML);
document.getElementById("allMovies").addEventListener("click", eddieMovieDatabase.showMoviesOnHTML);
document.getElementById("dropDownGenre").addEventListener("change", eddieMovieDatabase.sortByGenres);
document.getElementById("btnSortYear").addEventListener("click", eddieMovieDatabase.sortByYear);
document.getElementById("topRated").addEventListener("click", eddieMovieDatabase.sortByHighRating);
document.getElementById("lowRated").addEventListener("click", eddieMovieDatabase.sortByLowRating);
document.getElementById("btnAddGenre").addEventListener("click", eddieMovieDatabase.addMovieGenre);
document.getElementById("btnDeleteGenre").addEventListener("click", eddieMovieDatabase.removeMovieGenre);
document.getElementById("btnRate").addEventListener("click", eddieMovieDatabase.rateMovie);













