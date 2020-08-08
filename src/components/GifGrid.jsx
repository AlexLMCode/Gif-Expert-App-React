import React from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category)

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid animate__animated animate__lightSpeedInRight">
                {
                    images.map(image => <GifGridItem {...image} key={image.id}/>)
                }
            </div>
        </>
    );
};

export default GifGrid;
