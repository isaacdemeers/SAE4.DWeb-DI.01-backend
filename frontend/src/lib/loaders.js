import { fakeNetwork } from './utils.js';

// export async function fetchOurTeams(teamName) {
//     await fakeNetwork();
//     let answer = await fetch('/src/lib/data/teams-data.json');
//     let data = await answer.json();
//     return data[teamName];
// }


export async function fetchPricingData() {
    let answer = await fetch('/src/lib/data/pricing-data.json');
    let data = await answer.json();
    return data;
}

export async function fetchMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data;

}
export async function fetchMovie(id) {
    let answer = await fetch('http://localhost:8080/api/movies/' + id);
    let data = await answer.json();
    return data;

}

export async function fetchCategories() {
    let answer = await fetch('http://localhost:8080/api/categories/');
    let data = await answer.json();
    return data;

}

export async function fetchFeatured() {
    let answer = await fetch('http://localhost:8080/api/featured');
    let data = await answer.json();
    return data;

}

// export async function fetchResults(text) {
//     let answer = await fetch('http://localhost:8080/api/searchMovies/' + text);
//     let data = await answer.json();
//     return data;

// }
export async function fetchResults(value) {
    // si le type
    let url = 'http://localhost:8080/api/';
    //si le type de value est une liste
    if (value.includes('[')) {
        url += 'moviesBycategories/' + value;
        let answer = await fetch(url);
        let data = await answer.json();
        return data;
    } else {
        url += 'searchMovies/' + value;
        let answer = await fetch(url);
        let data = await answer.json();
        return data;
    }


}

export async function fetchwatchList() {
    let user = await getUser();
    let answer = await fetch('http://localhost:8080/api/watchList/' + user.id, {
        credentials: 'include',
        mode: 'cors',
    });
    let watchlist = await answer.json();

    let movies = await fetchMovies();

    if (watchlist) {
        let watchlistMovies = [];
        for (let i = 0; i < watchlist.movies.length; i++) {
            for (let j = 0; j < movies.length; j++) {
                if (watchlist.movies[i].id === movies[j].id) {
                    watchlistMovies.push(movies[j]);
                }
            }
        }
        return watchlistMovies;
    }
    return []

}

export async function addMovieToWatchlist(movieId) {
    let data = await fetch('http://localhost:8080/api/watchList/add/' + movieId, {
        credentials: 'include',
        mode: 'cors',
    });
    let answer = await data.json();
    return answer;
};



export default async function getUser() {
    let data = await fetch('http://localhost:8080/user', {
        credentials: 'include',
        mode: 'cors',
    });
    let answer = await data.json();
    return answer;
};