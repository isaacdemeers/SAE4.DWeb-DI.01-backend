import { fakeNetwork } from './utils.js';

export async function fetchOurTeams(teamName) {
    await fakeNetwork();
    let answer = await fetch('/src/lib/data/teams-data.json');
    let data = await answer.json();
    return data[teamName];
}

export async function fetchTestimonialData(teamName) {
    let answer = await fetch('/src/lib/data/testimonial-data.json');
    let data = await answer.json();
    data = data[teamName];
    // choose 3 random testimonies
    let testimonies = [];
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * data.length); // random index
        testimonies.push(data[index]); // add to testimonies
        data.splice(index, 1); // remove from data to avoid duplicates
    }
    return testimonies;
}

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