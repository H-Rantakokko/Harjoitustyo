async function getHouses() {
    let url = 'movies.json'
    try {
        let res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

async function showMovies() {
    movies = await getHouses()
    console.log(movies)

    let moviediv = document.getElementById("movies")

    movies.forEach(movie => {
        let moviecontainer = document.createElement('div')
        moviecontainer.className = 'movieContainer'

        let image = document.createElement('img')
        image.src = movie.image
        image.className = 'movieImage'

        let header = document.createElement('p')
        header.className = 'header'
        header.innerHTML = movie.name

        let year = document.createElement('p')
        year.innerHTML = movie.year

        let description = document.createElement('p')
        description.innerHTML = movie.description

        moviecontainer.appendChild(image)
        moviecontainer.appendChild(header)
        moviecontainer.appendChild(year)
        moviecontainer.appendChild(description)

        moviediv.appendChild(moviecontainer)
    })
}

function updateMovies() {
    let key1 = document.getElementById("key1").value
    let key2 = document.getElementById("key2").value

    // Tyhjennä elokuvien div ennen päivitystä
    document.getElementById("movies").innerHTML = ""

    // Suodata elokuvat key1 ja key2 perusteella
    let filteredMovies = movies.filter(movie => {
        return (key1 === "" || movie.key1 === key1) &&
               (key2 === "" || movie.key2 === key2)
    });

    // Näytä suodatetut elokuvat
    filteredMovies.forEach(movie => {
        let moviecontainer = document.createElement('div')
        moviecontainer.className = 'movieContainer'

        let image = document.createElement('img')
        image.src = movie.image
        image.className = 'movieImage'

        let header = document.createElement('p')
        header.className = 'header'
        header.innerHTML = movie.name

        let year = document.createElement('p')
        year.innerHTML = movie.year

        let description = document.createElement('p')
        description.innerHTML = movie.description

        moviecontainer.appendChild(image)
        moviecontainer.appendChild(header)
        moviecontainer.appendChild(year)
        moviecontainer.appendChild(description)

        document.getElementById("movies").appendChild(moviecontainer)
    })
}

// Kutsu showMovies alussa
showMovies()
