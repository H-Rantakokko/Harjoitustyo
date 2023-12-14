// Tämä otettu suoraan tehtävästä H4T1
async function getMovies() {
    let url = 'movies.json'
    try {
        let res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

// Tämä seuraava näyttää kaikki elokuvat heti kun sivu ladataan
async function showMovies() {
    movies = await getMovies()
    console.log(movies)

    let moviediv = document.getElementById("movies")

    
    movies.forEach(movie => {
        let moviecontainer = document.createElement('div')
        moviecontainer.className = 'movieContainer'
        // Haetaan kuvat
        let image = document.createElement('img')
        image.src = movie.image
        image.className = 'movieImage'
        // Haetaan elokuvan nimi
        let header = document.createElement('p')
        header.className = 'header'
        header.innerHTML = movie.name
        // Haetaan julkaisuvuosi
        let year = document.createElement('p')
        year.innerHTML = movie.year
        // Haetaan kuvaus
        let description = document.createElement('p')
        description.innerHTML = movie.description

        moviecontainer.appendChild(image)
        moviecontainer.appendChild(header)
        moviecontainer.appendChild(year)
        moviecontainer.appendChild(description)

        moviediv.appendChild(moviecontainer)
    })
}
// Tämän avulla päivitetään sivu käyttäjän valintojen mukaan
async function updateMovies() {
    let key1 = document.getElementById("key1").value
    let key2 = document.getElementById("key2").value

    // Tyhjennetään
    document.getElementById("movies").innerHTML = ""

    // Suodatetaan avainten perusteella käyttäjälle näytettävät elokuvat
    let filteredMovies = movies.filter(movie => {
        return (key1 === "" || movie.key1 === key1) &&
               (key2 === "" || movie.key2 === key2)
    });

    // Näytetään avainten perusteella suodatetut elokuvat, käytännössä toistoa aikaisemmasta koodista
    filteredMovies.forEach(movie => {
        let moviecontainer = document.createElement('div')
        moviecontainer.className = 'movieContainer'
        // Haetaan kuvat
        let image = document.createElement('img')
        image.src = movie.image
        image.className = 'movieImage'
        // Haetaan elokuvan nimi
        let header = document.createElement('p')
        header.className = 'header'
        header.innerHTML = movie.name
        // Haetaan julkaisuvuosi
        let year = document.createElement('p')
        year.innerHTML = movie.year
        // Haetaan kuvaus
        let description = document.createElement('p')
        description.innerHTML = movie.description

        moviecontainer.appendChild(image)
        moviecontainer.appendChild(header)
        moviecontainer.appendChild(year)
        moviecontainer.appendChild(description)

        document.getElementById("movies").appendChild(moviecontainer)
    })
}
showMovies()
