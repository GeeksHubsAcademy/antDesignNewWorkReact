
import React, { useState, useEffect } from 'react';
import { topRatedMovies } from '../../services/apiCalls';

import './Home.css';
import DynamicCarousel from './partials/DynamicCarousel/DynamicCarousel';
import MultiplePreview from './partials/MultiplePreview/MultiplePreview';

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        if (movies.length === 0) {

            topRatedMovies()
                .then(
                    res => {

                        setMovies(res.data.results)
                    }
                )
                .catch(error => console.log(error));
        }

    }, [movies]);


    return (
        <div className='homeDesign'>

            {
                movies.length > 0 &&

                <>
                    <DynamicCarousel movies={movies} />
                    <MultiplePreview movies={movies} />
                </>

            }
        </div>
    )
}
export default Home;