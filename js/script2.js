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
		title: "LOGAN",
		year: 2017,
		cover: "http://screencrush.com/files/2017/01/loganposter2.jpg",
		genres: [" Action", "Drama", "Sci-Fi "],
		ratings: [9,8,9,9,9,7,9,9,7,9]
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
		ratings: [9,8,9,10,9,8,9,8,9,9]
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
			this.cover = cover || 'http://placehold.it/600x900?text=' + title;
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
			//if you leave certain fields empty.
			if (addTitle === "" || addYear === "") {
				alert("Title and year is needed to add a movie");
				return;
			}
			else {
				//Constructor is called with the parameters inserted from the input fields.
				//A new movie is constructed and is put into the variable movieFromHTML.
				//Next the new movie (object) is pushed into the database and displayed on the page next to the other movies.
				//Last before the form is reset the dropdown menu in the edit movie modal is populated with the newly added movie.
				let movieFromHTML = new eddieMovieDatabase.MovieConstructor(addTitle, addYear, addGenres, intRating, addCover);
				eddieMovieDatabase.pushMovie(movieFromHTML);
				eddieMovieDatabase.showMoviesOnHTML();
				eddieMovieDatabase.populateEditDropDown();

				let form = document.getElementById("emdb-form");
				form.reset();
			}

			
		},
		//Creates a div with a movie from the array and shows it on the HTML page.
		//Nicely rendered as a card thanks to the bootstrap class (card).
		showMoviesOnHTML: () => {
			movieUL.innerHTML = "";
			for (let i = 0; i < movies.length; i++) {
				let rating = eddieMovieDatabase.movieRateCalculator(movies[i].ratings);
				let blockofMovies = `<div class="movieDIV card col-md-2">
				<img class="card-img-top img-responsive pt-15" src="${movies[i].cover}">
				<div class="card-block">
				<h6 class="card-title">${movies[i].title}</h6>
				<p class="card-text">${movies[i].year}</p>				
				<p class="card-text">Genre(s): ${movies[i].genres.join(", ")}</p>
				<p class="card-text">Ratings: ${rating} </p>
				</div>
				</div>`;
				movieUL.innerHTML += blockofMovies;
			};
		},
		//Function to display the movies when they have been sorted
		//by high or lowest rating.
		showSortedMoviesOnHTML: (x) => {

			movieUL.innerHTML = ""; //Clears the container div before it renders
			//so it wont double post.
			for (let i = 0; i < x.length; i++) {
				let rating = eddieMovieDatabase.movieRateCalculator(x[i].ratings);
				let blockofMovies = `<div class="movieDIV card col-md-2">
				<img class="card-img-top img-responsive pt-15" src="${x[i].cover}">
				<div class="card-block">
				<h6 class="card-title">${x[i].title}</h6>
				<p class="card-text">${x[i].year}</p>				
				<p class="card-text">Genre(s): ${x[i].genres.join(", ")}</p>
				<p class="card-text">Ratings: ${rating} </p>
				</div>
				</div>`;
				movieUL.innerHTML += blockofMovies;
			};

		},
		//Function that prints out on the DOM a specific movie(s) that was searched for by genre.
		showMoviesByGenre: (index) => {
			let blockofMovies = '';
			let rating = eddieMovieDatabase.movieRateCalculator(movies[index].ratings);
			blockofMovies = `<div class="movieDIV card col-md-2">
			<img class="card-img-top img-responsive pt-15" src="${movies[index].cover}">
			<div class="card-block">
			<h6 class="card-title">${movies[index].title}</h6>
			<p class="card-text">${movies[index].year}</p>				
			<p class="card-text">Genre(s): ${movies[index].genres.join(", ")}</p>
			<p class="card-text">Ratings: ${rating} </p>
			</div>
			</div>`;
			movieUL.innerHTML += blockofMovies;
		},
		//Function that prints out on the DOM a specific movie(s) that was searched for by year.
		showMoviesByYear: (year) => {
			let blockofMovies = '';
			//movieUL.innerHTML = "";
			let rating = eddieMovieDatabase.movieRateCalculator(movies[year].ratings);
			blockofMovies = `<div class="movieDIV card col-md-2">
			<img class="card-img-top img-responsive pt-15" src="${movies[year].cover}">
			<div class="card-block">
			<h6 class="card-title">${movies[year].title}</h6>
			<p class="card-text">${movies[year].year}</p>				
			<p class="card-text">Genre(s): ${movies[year].genres.join(", ")}</p>
			<p class="card-text">Ratings: ${rating} </p>
			</div>
			</div>`;
			movieUL.innerHTML += blockofMovies;

		},
		//Function that will run if no movie with the year you searched is in the database.
		noMovieByThisYear: () => {
			movieUL.innerHTML = `<h1 class="noMovie-margin-color">Sorry no match for a movie with that year in the database!</h1>`	
		},
		
		//Function that will calculate the medium value of all the ratings that the movies have.
		movieRateCalculator: (movieArray) => {
			//Takes in a the rating array from a movie (object).
			//Loops through the array and 
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
              //Compare function that look at the calculated median rating values of movies in the array. 
              //The function take two arguments, return 0, greater than 0, or less than 0, based on what happens with the values that come in to the function.
              //Return less than 0 if r1 is less than r2
              //Return greater than 0 if r1 is greater than r2
              //Return 0 if r1 equals r2
              //When you call sort() with the compare function, the function is called on pairs in your to-be-sorted list, to determine the proper ordering.
              //The boolean sortByHigh is triggered indicating that the user want to sort by highest rated movies and thus reverse the array after it has been sorted and displayed.
              //if the boolean is not triggered the array is sorted and and displayed with the lowest rated movie first.
             
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
          //Function that checks if you chosen to sort by Highest rating.
          sortByHighRating: () => {
          	eddieMovieDatabase.sortByRating(true);
          },
         //Function that checks if you chosen to sort by Lowest rating.
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
        	let noMoviesFound = true;
        	if (txtYear === "") {
        		alert("Please enter a year!");
        		return;
        	}
        	movieUL.innerHTML = "";
        	console.log(movieUL.innerHTML);
        	for (var i = 0; i < movies.length; i++) {
        		if (intYear == movies[i].year) {
        			noMoviesFound = false;
        			eddieMovieDatabase.showMoviesByYear(i);
        		}
        	}
        	if (noMoviesFound) {
        			eddieMovieDatabase.noMovieByThisYear();
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
        //Function at enables the user to add a genre(s) to a movie.
        addMovieGenre: () => {
        	//selectedMovie is a variable that contains the dropdown menu that is used to chose a movie to edit.
        	let selectedMovie = document.getElementById("selectedMovieTitle").value;
        	//dropdown menu to chose a genre from.
        	let genreToAdd = document.getElementById("dropDownEditGenre").value;
        	let theMovie;
        	//Loop through the movie array check if the movie selected in the dropdown match a movie in the array.
        	//If it does add the index of the movie chosen to the variable theMovie.
        	for (var i = 0; i < movies.length; i++) {
        		if (selectedMovie === movies[i].title) {
        			theMovie = movies[i];
        		}
        	}
        	//If the genre you want to add is allready in the genre array on the movie object
        	//it wont be added a second time.
        	for (let i = 0; i < theMovie.genres.length; i++) {
        		if (genreToAdd === theMovie.genres[i]){
        			return;
        		}
        	}
        	//If no genre has been choosen nothing will happen.
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
        //Function that enables the user to remove a genre(s) on a specific movie.
        removeMovieGenre: () => {
        	//selectedMovie is a variable that contains the dropdown menu that is used to chose a movie to edit.
        	let selectedMovie = document.getElementById("selectedMovieTitle").value;
        	//dropdown menu to chose a genre from.
        	let genreToRemove = document.getElementById("dropDownEditGenre").value;
        	let currentMovie;
        	//loop through the movie array and makes a check vs the dropdown menu for a match on the title
        	//if its a match it get that movie (object) and put it into the variable currentMovie.
        	for (var i = 0; i < movies.length; i++) {
        		if (selectedMovie === movies[i].title) {
        			currentMovie = movies[i];
        		}
        	}
             //Loop through the array of genres for the movie choosen established from the previews for loop.
             //If the Genre chosen in the dropdown (genreToRemove) is a match in the array of genres for the movie
             //that match will be removed with the help of the splice method.
        	for (var x = 0; x < currentMovie.genres.length; x++) {
        		if (genreToRemove === currentMovie.genres[x]) {
        			currentMovie.genres.splice(x,1);
        		}
        	}
        	eddieMovieDatabase.showMoviesOnHTML();
        },
        editMovieCover: () => {
        	//selectedMovie is a variable that contains the dropdown menu that is used to chose a movie to edit.
             let selectedMovie = document.getElementById("selectedMovieTitle").value;
             //URL input field where you add the new poster.
             let editCover = document.getElementById("editNewCover").value;
             //Check if the input field is populated or not.
             if (editCover === "") {
             	alert("You need to add a URL!");
             	return;
             }
             else {
             	//Loop the movie array for a match to the dropdown menu choice
             	//and change the current cover picture for the new one.
             	for (var i = 0; i < movies.length; i++) {
             		if (selectedMovie === movies[i].title) {
                      movies[i].cover = editCover;
             		}
             	}
             }
             eddieMovieDatabase.showMoviesOnHTML();
        },
        //Function that allows you to rate a movie in the database.
        rateMovie: () => {
        	//selectedMovie is a variable that contains the dropdown menu that is used to chose a movie to edit.
        	let selectedMovie = document.getElementById("selectedMovieTitle").value;
        	//addedRate dropdown menu to chose a number to rate a movie with.
        	let addedRate = document.getElementById("edRatings").value;
        	let intRate = parseInt(addedRate);
        	//If no number has been chosen you are reminded that you need to choose one.
        	if (addedRate === "") {
        		alert("Please choose a number!");
        		return;
        	}
        	//If you have chosen a number the loop will go through the array of movies and check 
        	//if the selected movie in the drop down menu is equal to a movie in the array
        	//and push the selected number into the ratings array for the specified movie.
        	else {
        		for (var i = 0; i < movies.length; i++) {
        			if (selectedMovie === movies[i].title) {
        				movies[i].ratings.push(intRate);
        			}
        		}
        	}
        	eddieMovieDatabase.showMoviesOnHTML();
        },
        //Function that activate all eventListeners on the webpage.
        registerEventHandlers: () => {
        	document.getElementById("btnAdd").addEventListener("click", eddieMovieDatabase.addMovieFromHTML);
        	document.getElementById("allMovies").addEventListener("click", eddieMovieDatabase.showMoviesOnHTML);
        	document.getElementById("dropDownGenre").addEventListener("change", eddieMovieDatabase.sortByGenres);
        	document.getElementById("btnSortYear").addEventListener("click", eddieMovieDatabase.sortByYear);
        	document.getElementById("topRated").addEventListener("click", eddieMovieDatabase.sortByHighRating);
        	document.getElementById("lowRated").addEventListener("click", eddieMovieDatabase.sortByLowRating);
        	document.getElementById("btnAddGenre").addEventListener("click", eddieMovieDatabase.addMovieGenre);
        	document.getElementById("btnDeleteGenre").addEventListener("click", eddieMovieDatabase.removeMovieGenre);
        	document.getElementById("btnEditCover").addEventListener("click", eddieMovieDatabase.editMovieCover);
        	document.getElementById("btnRate").addEventListener("click", eddieMovieDatabase.rateMovie);
        },
        //Self-invoking function that will load the DOM content and activate all the eventListeners.
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



















