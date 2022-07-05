import Movie from "../models/Movie";
import Video from "../models/Video";
import axiosClient from "./axios-client";

export enum Category {
    Movie = "movie",
    Tv = "tv",
}

export enum MovieType {
    Similiar = "similiar",
    Upcoming = "upcoming",
    Popular = "popular",
    Top_Rated = "top_rated",
}

export enum TvType {
    Popular = "popular",
    Top_Rated = "top_rated",
    On_The_Air = "on_the_air",
}

export const category: any = {
    movie: "movie",
    tv: "tv",
};

export const movieType: any = {
    upcoming: "upcoming",
    popular: "popular",
    top_rated: "top_rated",
};

export const tvType: any = {
    popular: "popular",
    top_rated: "top_rated",
    on_the_air: "on_the_air",
};

export interface Params {
    page?: number;
}

interface ApiResponse<T> {
    cast: any;
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

const tmdbApi = {
    getMoviesList: (type: any, params: any) => {
        const url = "movie/" + movieType[type];
        return axiosClient.get<any, ApiResponse<Movie>>(url, params);
    },
    getTvList: (type: any, params: any) => {
        const url = "tv/" + tvType[type];
        return axiosClient.get<any, ApiResponse<any>>(url, params);
    },
    getVideos: (cate:any, id: any) => {
        const url = category[cate] + "/" + id + "/videos";
        return axiosClient.get<any, ApiResponse<Video>>(url, { params: {} });
    },
    search: (cate: any, params: any) => {
        const url = 'search/' + category[cate];
        return axiosClient.get<any, ApiResponse<any>>(url, params);
    },
    detail: (cate: any, id: any, params: any) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get<any, ApiResponse<any>>(url, params);
    },
    credits: (cate: any, id: any) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get<any, ApiResponse<any>>(url, {params: {}});
    },
    similar: (cate: any, id: any) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get<any, ApiResponse<any>>(url, {params: {}});
    },
};

export default tmdbApi;
