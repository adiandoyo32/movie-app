import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdb-api';

interface VideoListProps {
    id?: any;
}

const VideoList: React.FC<VideoListProps> = (props) => {

    const {category} = useParams();

    const [videos, setVideos] = useState<any>([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {
                videos.map((item: any, i: number) => (
                    <Video key={i} item={item}/>
                ))
            }
        </>
    );
}

interface VideoProps {
    item: any;
}

const Video: React.FC<VideoProps> = (props) => {

    const item = props.item;

    const iframeRef = useRef<any>(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;
