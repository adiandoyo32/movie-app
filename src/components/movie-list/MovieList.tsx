import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category } from "../../api/tmdb-api";
import MovieCard from "../movie-card/MovieCard";

import "./movie-list.scss"

interface MovieListProps {
    id?: number;
    type: string;
    category: string;
}

const MovieList: React.FC<MovieListProps> = (props) => {
    const [items, setItems] = useState<any>([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
                {items.map((item: any, i: number) => (
                    <SwiperSlide key={i}>
                        <MovieCard item={item} category={props.category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieList;
