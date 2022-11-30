
import React from 'react';
import { Image } from 'antd';

const MultiplePreview = ({ movies }) => {


    return (

        <div sclassName='multiplePreviewDesign'>
        <Image.PreviewGroup>
            {

                movies.slice(0, 2).map(
                    movie => {
                        return (
                            <>
                                <Image width={200} src={`https://image.tmdb.org/t/p/original/`+ movie.poster_path} />
                                <Image
                                    width={200}
                                    src={`https://image.tmdb.org/t/p/original/`+ movie.backdrop_path}
                                />
                            </>
                        )
                    }
                )
            }


        </Image.PreviewGroup>

        </div>
    )
}

export default MultiplePreview;


