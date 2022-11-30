
import React from 'react';
import './DynamicCarousel.css';

import { Carousel, Image } from 'antd';

const contentStyle = {
    height: '250px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const DynamicCarousel = ({ movies }) => {

    return (
        <>
            <Carousel fade autoplay>

                {
                    movies.slice(0, 10).map(
                        movie => {
                            return (
                                <div key={movie.id} className='carouselMovieDisplay'>
                                    <h3 style={contentStyle}>
                                        {/* <img className='moviePoster' src={`https://image.tmdb.org/t/p/original/`+ movie.poster_path} alt={movie.title} /> */}

                                        <Image
                                            width={150}
                                            src={`https://image.tmdb.org/t/p/original/`+ movie.poster_path}
                                        />
                                        {/* {movie.original_title} */}
                                    </h3>
                                </div>
                            )
                        }
                    )
                }
            </Carousel>
        </>
    )
}
export default DynamicCarousel;



