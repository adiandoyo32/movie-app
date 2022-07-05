import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdb-api';
import apiConfig from '../../api/api-config';

interface CastListProps {
    id: any;
}

const CastList: React.FC<CastListProps> = (props) => {

    const {category} = useParams();

    const [casts, setCasts] = useState<any>([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <div className="casts">
            {
                casts.map((item: any, i: number) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;
