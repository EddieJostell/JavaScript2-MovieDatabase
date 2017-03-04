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
		cover: "https://s-media-cache-ak0.pinimg.com/originals/a2/90/da/a290dac56310aa3efbecfd4682f60ac2.png",
		genres: ["Action", "Adventure", "Fantasy"],
		ratings: [0,2,5,8,9,1,3,4,6,3]
	},

	{
		title: "Jason Bourne",
		year: 2016,
		cover: "http://s2.discshop.se/img/front_large/143147/jason_bourne.jpg",
		genres: ["Action", "Thriller"],
		ratings: [6,6,7,8,9,2,4,3,2,6]
	},

	{
		title: "Waterworld",
		year: 1995,
		cover: "https://images-na.ssl-images-amazon.com/images/I/51OovkfWLoL._SY300_.jpg",
		genres: ["Action", "Adventure", "Sci-Fi"],
		ratings: [8,9,6,5,7,8,6,7,5,9]
	},

	{
		title: "Blade Runner",
		year: 1982,
		cover: "https://images-na.ssl-images-amazon.com/images/I/51fHyCTQ2GL._SY300_.jpg",
		genres: ["Sci-Fi", "Thriller"],
		ratings: [9,8,9,7,9,8,9,8,9]
	},
	{
		title: "The Fifth Element",
		year: 1995,
		cover: "https://images-na.ssl-images-amazon.com/images/I/51ZhOCOjPuL._SY300_.jpg",
		genres: ["Action", "Adventure", "Sci-Fi"],
		ratings: [9,9,9,9,9,9,10,8]
	},
	{
		title: "Poltergeist",
		year: 1982,
		cover: "https://images-na.ssl-images-amazon.com/images/I/5151JIkQV9L._SY300_.jpg",
		genres: ["Fantasy", "Horror", "Thriller"],
		ratings: [9,9,9,9,7,8,6]
	},

	{
		title: "The Big Lebowski",
		year: 1998,
		cover: "http://www.impawards.com/1998/posters/big_lebowski_ver1.jpg",
		genres: ["Comedy", "Crime", "Mystery"],
		ratings: [9,9,9,9,8,8,7,6,8,5]
	},

	{
		title: "Pulp Fiction",
		year: 1994,
		cover: "http://cdn.miramax.com/media/assets/Pulp-Fiction1.png",
		genres: ["Crime", "Drama"],
		ratings: [9,5,7,9,8,8,7,6,8,5]
	},
	{
		title: "Titanic",
		year: 1997,
		cover: "https://s-media-cache-ak0.pinimg.com/736x/44/55/d9/4455d96357fb041d1cf3c8a5264ed593.jpg",
		genres: ["Drama", "Romance"],
		ratings: [7,6,8,5,7]
	}, 

	{
		title: "Fight Club",
		year: 1999,
		cover: "http://www.impawards.com/1999/posters/fight_club_ver3.jpg",
		genres: ["Drama"],
		ratings: [9,9,7,8,6,7,8,8,7,6] 
	},
	{
		title: 'The Exorcist',
		year: 1973,
		cover: "http://www.impawards.com/1973/posters/exorcist.jpg",
		genres: ['Horror','Thriller'],
		ratings:[7,8,8,9]
	},
	{
		title: 'Casino Royale',
		year: 2006,
		cover: "http://www.impawards.com/2006/posters/casino_royale.jpg",
		genres: ['Action','Adventure','Thriller'],
		ratings: [6,4,8,9,9,9,9]
	},

	{
		title:'Star Wars: Episode VI - Return of the Jedi',
		year: 1983,
		cover: "https://s-media-cache-ak0.pinimg.com/736x/82/bb/1a/82bb1a79c74ef439e7a93b5600373cdc.jpg",
		genres:["Action", "Adventure", "Fantasy"],
		ratings:[9,10,10,10,9]

	},
	{
		title: "Fury",
		year: 2014,
		cover: "http://www.impawards.com/2014/posters/fury.jpg",
		genres: ["Action", "Drama", "War"],
		ratings: [8,9,9,6,7,8,9,8]
	},
	{
		title: "Gladiator",
		year: 2000,
		cover: "https://www.movieposter.com/posters/archive/main/42/MPW-21199",
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
		MovieConstructor: function(title, year, genres, ratings, cover) {
			this.title = title;
			this.year = year;
			this.genres = genres.split(' ');
			this.ratings = [ratings];
			this.cover = cover;
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
			let addTitle = document.getElementById("title").value.trim();
			let addYear = document.getElementById("year").value;
			let addCover = document.getElementById("cover").value;
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
			if (addTitle === "" || addYear === "" || addGenres === "" || addRatings === "" || addCover === "") {
				alert("All fields are required!");
				return;
			}
			else {
				let movieFromHTML = new eddieMovieDatabase.MovieConstructor(addTitle, addYear, addGenres, intRating, addCover);
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
				let blockofMovies = `<div class="movieDIV card col-md-2">
				<img class="card-img-top img-responsive pt-15" src="${movies[i].cover}">
				<div class="card-block">
				<h4 class="card-title">${movies[i].title}</h4>
				<p class="card-text">${movies[i].year}</p>				
				<p class="card-text">Genre(s): ${movies[i].genres} </p>
				<p class="card-text">Ratings: ${rating} </p>
					</div>
				</div>`;
				movieUL.innerHTML += blockofMovies;
		/*	movieUL.innerHTML = "";
			for (let i = 0; i < movies.length; i++) {
				let rating = eddieMovieDatabase.movieRateCalculator(movies[i].ratings);
				let blockofMovies = `<div class="movieDIV col-md-4">
				<img width="200" height="300" src="${movies[i].cover}">
				<h4>${movies[i].title}</h4>
				<p>${movies[i].year}</p>				
				<p>Genre(s): ${movies[i].genres} </p>
				<p>Ratings: ${rating} </p>
				</div>`;
				movieUL.innerHTML += blockofMovies;*/
			};

		},
		showSortedMoviesOnHTML: (x) => {

			movieUL.innerHTML = "";
			for (let i = 0; i < x.length; i++) {
				let rating = eddieMovieDatabase.movieRateCalculator(x[i].ratings);
				let blockofMovies = `<div class="movieDIV">
				<img width="200" height="300" src="${x[i].cover}">
				<h4>${x[i].title}</h4>
				<p>${x[i].year}  </p>
				<p>Genre(s): ${x[i].genres} </p>
				<p>Ratings: ${rating} </p>
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
			<img width="200" height="300" src="${movies[index].cover}">
			<h4>${movies[index].title}</h4>
			<p>${movies[index].year}  </p>
			<p>Genre(s): ${movies[index].genres} </p>
			<p>Ratings: ${rating} </p>
			</div>`;
			movieUL.innerHTML += blockofMovies;
		},
		//Function that prints out on the DOM a specific movie that was searched for by year.
		showMoviesByYear: (year) => {
			let blockofMovies = '';
			//movieUL.innerHTML = "";
			
			let rating = eddieMovieDatabase.movieRateCalculator(movies[year].ratings);
			blockofMovies = `<div class="movieDIV">
			<img width="200" height="300" src="${movies[year].cover}">
			<h4>${movies[year].title}</h4>
			<p>${movies[year].year}  </p>
			<p>Genre(s): ${movies[year].genres} </p>
			<p>Ratings: ${rating} </p>
			</div>`;
			movieUL.innerHTML += blockofMovies;
			
		},
		//Function that will run if no movie with the year searched for is found in the database.
	/*noMovieByThisYear: () => {
			alert("Sorry no movie with that year currently in the database");
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
			//Defined new empty array.
			let sortedArray = [];

			for (var i = 0; i < movies.length; i++) {
				//Push excisting array into the new array.
				sortedArray.push(movies[i]);
			}
              //Compare function that look at the calculated median rating value of a movie in the array 
              //and compare it against the value of the another movie and returns a movie rating depending on largest value.
              //If the boolean sortByHigh is not triggered indicating that the user want to sort by Lowest Rated movies.
              //The built in sort(); function makes bubble sort on the values from the compareNumbers function and list the movies 
              //with lowest rating first.
              //If on the other hand the boolena is triggered and the user want to sort by top rated movies
              //The sort() function kicks in and does the bubble sort again but this time it will reverse the list
              //and the top rated movies will be shown from top to bottom. 
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
        			eddieMovieDatabase.noMovieByThisYear();
        		}*/
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
        	//If the genre you want to add is allready stated on the movie
        	//it wont be added a second time.
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
        	//Push the genre to the array of genres on the move choosen
        	//and show it on the HTML.
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
        },
        registerEventHandlers: () => {
        	document.getElementById("btnAdd").addEventListener("click", eddieMovieDatabase.addMovieFromHTML);
        	document.getElementById("allMovies").addEventListener("click", eddieMovieDatabase.showMoviesOnHTML);
        	document.getElementById("dropDownGenre").addEventListener("change", eddieMovieDatabase.sortByGenres);
        	document.getElementById("btnSortYear").addEventListener("click", eddieMovieDatabase.sortByYear);
        	document.getElementById("topRated").addEventListener("click", eddieMovieDatabase.sortByHighRating);
        	document.getElementById("lowRated").addEventListener("click", eddieMovieDatabase.sortByLowRating);
        	document.getElementById("btnAddGenre").addEventListener("click", eddieMovieDatabase.addMovieGenre);
        	document.getElementById("btnDeleteGenre").addEventListener("click", eddieMovieDatabase.removeMovieGenre);
        	//document.getElementById("btnSortYear").addEventListener("click", eddieMovieDatabase.noMovieByThisYear);
        	document.getElementById("btnRate").addEventListener("click", eddieMovieDatabase.rateMovie);
        },
        initialize: (() => {
        	document.addEventListener('DOMContentLoaded', () => {
        		eddieMovieDatabase.showMoviesOnHTML();
        		eddieMovieDatabase.populateEditDropDown();
        		eddieMovieDatabase.registerEventHandlers();
        	});
        })()

    };
})();


//console.log(eddieMovieDatabase.getMovies());














