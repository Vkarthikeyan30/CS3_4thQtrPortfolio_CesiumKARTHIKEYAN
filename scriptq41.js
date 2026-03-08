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