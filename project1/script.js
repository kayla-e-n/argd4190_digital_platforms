// let myElement = document.getElementById ("para")
// myElement.style.color = "blue"
// myElement.style.fontSize = "3rem"
// myElement.style.backgroundColor = "yellow"
// myElement.innerHTML += ", welcome"

fetch("movieData.json").then(response => response.json())
    .then(json => {
        movies = json
        for(let i = 0; i < movies.length; i++) {
            let movie = movies [i]
            makeMovie(movie)
        }
    })
    .catch(error => console.log("error:", error))

    function makeMovie(movie) {
    let movieSection = document.querySelector("#movies")
    // let genres = movie.genres.split(",")
    // let genreList = document.createElement("p")
    // genreList.classList.add("genres")
    // console.log(genres)
    let newMovie = document.createElement("div")
    newMovie.innerHTML = `
    <h2 class="movieTitle">${movie.title}</h2>
        <p>by ${movie.director}</p>
        <div>
            <img class="movieCover" src="${movie.path}" alt="${movie.alt_text}" />
        </div>
        <h3 class="genre">${movie.genre}</h3>
        <h3 class="rating">${movie.rating}</h3>
    `
    // for(let j = 0; j < genres.length; j++) {
    // genreList.innerHTML += `<span>${genres[j]}</span>`
    // }
    // newMovie.appendChild(genreList)
    newMovie.classList.add("card")
    movieSection.appendChild(newMovie)
}

function createGenreFilter(genre) {
       document.querySelector(`[data-genre="${genre}"]`).addEventListener("click", function(event) {
        let selectedGenreFilter= event.target
        let selectedGenre = selectedGenreFilter.getAttribute("data-genre")
        let moviesSection = document.querySelector("#movies")
        moviesSection.innerHTML = "" 
        let filters = document.querySelectorAll(".filter")
        
        for(let i = 0; i < movies.length; i++) {
                let movie = movies[i]
                let genres = movie.genre.toLowerCase() 
                if (genres.includes(`${genre}`) || selectedGenre === "all") {
                    makeMovie(movie)
                }
                
        }
        
        styleFilters(filters, selectedGenre)
    })
}
function createRatedFilter(rated) {
    document.querySelector(`[data-rated="${rated}"]`).addEventListener("click", function(event) {
    let moviesSection = document.querySelector("#movies")
    moviesSection.innerHTML = ""
    let filteredMovies = movies.filter(movie => movie.rating.toLowerCase() === rated);
    for(let i = 0; i < filteredMovies.length; i++) {
        makeMovie(filteredMovies[i])
    }
    let filters = document.querySelectorAll(".filter")
    styleFilters(filters, rated)
})
}

//stack overflow example
// var results = [];
// var searchVal = "title";
// for (var i=0 ; i < movies.length ; i++)
// {
//     if (title[i][searchField] == searchVal) {
//         results.push(title[i]);
//     }
// }

// w3 school example
// function search(title) {
//     document.querySelector(`[data-title="${title}"]`).addEventListener("input", function(event) {
//         let movieTitles = document.querySelector("#movies")
//         movieTitles.innerHTML = ""
//         input = document.getElementById("myInput");
//         filter = input.value.toLowerCase();
//         for(let i = 0; i < filteresMovies,length; i++) {
//             makeMovie(filteredMovies[i])
//         }
//         let filters = document.querySelectorAll(".filter")
//         styleFilters(filters, title)
//     }
//     var input, filter, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

createGenreFilter("drama")
createGenreFilter("all")
createGenreFilter("horror")
createGenreFilter("animation")
createGenreFilter("avant-garde")
createGenreFilter("documentary")
createGenreFilter("war")
createGenreFilter("action")
createGenreFilter("comedy")
createGenreFilter("romance")
createGenreFilter("mystery")
createRatedFilter("⭐⭐/⭐⭐⭐⭐⭐")
createRatedFilter("⭐⭐.5/⭐⭐⭐⭐⭐")
createRatedFilter("⭐⭐⭐/⭐⭐⭐⭐⭐")
createRatedFilter("⭐⭐⭐.5/⭐⭐⭐⭐⭐")
createRatedFilter("⭐⭐⭐⭐/⭐⭐⭐⭐⭐")
createRatedFilter("⭐⭐⭐⭐.5/⭐⭐⭐⭐⭐")
createRatedFilter("⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐")


let rates = ["2/5", "2.5/5", "3/5", "3.5/5", "4/5", "4.5/5", "5/5"]
for(let i = 0; i < rates.length; i++) {
    createRatedFilter(rates[i])
}



function styleFilters(filters, selected) {
    for(let i = 0; i < filters.length; i++) {
        let filter = filters[i]
        if (filter.getAttribute("data-genre")  === selected || filter.getAttribute("data-rated") === selected) {
            filter.classList.add("selected")
        } else {
            filter.classList.remove("selected")
        }
        
    }
}