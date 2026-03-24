//star rating code
// erm ma'am i couldn't test po if the star code works because i think i did something wrong po with the css styling

var form = document.getElementById('RatingForm');
var titleInput = document.querySelector('.Title');
var yearInput = document.querySelector('.Year');
var genreInput = document.querySelector('.Genre');
var ratingInput = document.querySelector('.rating input[name="rating"]');
var rateStars = document.querySelectorAll('.rating .star');
var movieList = document.getElementById('movieList');
var clearBtn = document.getElementById('clearBtn');

//reworked star maybe

const rateStars = document.querySelectorAll('.rating .star')

rateStars.forEach((item, idx) => {
    item.addEventListener('click', function () {
        document.querySelector('.rating input[name="rating"]').value = idx + 1
        let click = 0

        rateStars.forEach(i=> {
            i.classList.replace('bxs-star', 'bx-star')
            i.rateStars[i].classList.remove('active')
        })
        for(let i=0; i<rateStars.length; i++) {
            if(i <= idx) {
                rateStars[i].classList.replace('bx-star', 'bxs-star')
                rateStars[i].classList.add('active')
            } else {
                rateStars[i+1].style.setProperty('--i', click)
                click++
            }
    }

})

})

//local storage

const form = document.getElementById('RatingForm')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const title = document.querySelector(".Title")
    const year = document.querySelector(".Year")
    const genre = document.querySelector(".Genre")
    const rating = document.querySelector(".rating input[name='rating']")

    const movie = {
        title: title.value,
        year: year.value,
        genre: genre.value,
        rating: rating.value
    }

    let movies = JSON.parse(localStorage.getItem('movies')) || []
    movies.push(movie)
    localStorage.setItem('movies', JSON.stringify(movies))

    form.reset()
})

// convert numbers to stars

function getStars(rating) {
    var stars = "";
    
for(let i = 0; i < 5; i++) {
        if(i < rating) {
            stars += "★";
        } else {
            stars += "☆";
        }
    }
    return stars;
}

// Delete stars

function deleteMovie(index) {
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.splice(index, 1)
    localStorage.setItem('movies', JSON.stringify(movies))
    displayMovies()
}

displayMovies();