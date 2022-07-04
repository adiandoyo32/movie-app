import React from "react";
import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import apiConfig from "../../api/api-config";
import Movie from "../../models/Movie";
import TV from "../../models/TV";
import Button from "../button/Button";

import "./movie-card.scss"

interface MovieCardProps {
    item: Movie & TV;
    category: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ item, category }) => {
    const link = '/' + category + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    
    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <BiPlay />
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
};

export default MovieCard;
