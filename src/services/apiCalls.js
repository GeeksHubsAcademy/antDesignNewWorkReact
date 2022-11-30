
import axios from 'axios';

var root = 'https://api.themoviedb.org/3/movie';
var apiKey = '210d6a5dd3f16419ce349c9f1b200d6d'


export const topRatedMovies = async () => {

    let config = {
        method: 'get',
        url: `${root}/top_rated?api_key=${apiKey}&language=en-US&page=1`
    }

    return await axios(config);
}