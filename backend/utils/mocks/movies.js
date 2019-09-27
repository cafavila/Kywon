const moviesMock = [{
    "id": 1,
    "slug": "tvshow",
    "title": "Mi Lista",
    "type": "Scripted",
    "language": "English",
    "year": 2009,
    "contentRating": "16+",
    "duration": 164,
    "cover": "https://cdn.pixabay.com/photo/2019/08/20/20/36/tiger-4419674_1280.jpg",
    "description": "Tiger Woods",
    "source": "http://dummyimage/gismodo.gif",
    "tags": ['Animal', 'TV Series']
},
{
    "id": 2,
    "slug": "tvshow",
    "title": "Authum",
    "type": "Scripted",
    "language": "English",
    "year": 2009,
    "contentRating": "16+",
    "duration": 164,
    "cover": "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_1280.jpg",
    "description": "Otoño antiguo",
    "source": "http://dummyimage/gismodo.gif",
    "tags": ['Animal', 'TV Series']
},
{
    "id": 3,
    "slug": "tvshow",
    "title": "Santiago",
    "type": "Scripted",
    "language": "English",
    "year": 2009,
    "contentRating": "16+",
    "duration": 164,
    "cover": "https://cdn.pixabay.com/photo/2015/09/16/15/34/sunset-942841_1280.jpg",
    "description": "El bella",
    "source": "http://dummyimage/gismodo.gif",
    "tags": ['Cultural', 'TV Series', 'Arquitectura']
},
{   "id": 4,
    "slug": "Movile",
    "title": "Dibujos animados",
    "type": "Scripted",
    "language": "English",
    "year": 2011,
    "contentRating": "14+",
    "duration": 120,
    "cover": "https://cdn.pixabay.com/photo/2017/12/28/12/31/sketch-3045125__480.jpg",
    "description": "Monitos",
    "source": "http://dummyimage/gismodo.gif",
    "tags": ['Animal', 'TV Series', 'Infantil']
}]

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag))
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock)
    }
    async getMovie() {
        return Promise.resolve(moviesMock[0])
    }
}
module.exports = {moviesMock, filteredMoviesMock, MoviesServiceMock}