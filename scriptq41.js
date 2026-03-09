//star rating code
// erm ma'am i couldn't test po if the star code works because i think i did something wrong po with the css styling

const rateStars = document.querySelectorAll('.rating .star')

rateStars.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0

        allStar.forEach(i=> {
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