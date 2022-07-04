import Movie from "../models/Movie";
import Video from "../models/Video";
import axiosClient from "./axios-client";

export enum Category {
  Movie = "movie",
  Tv = "tv",
}

export enum MovieType {
  Upcoming = "upcoming",
  Popular = "popular",
  Top_Rated = "top_rated",
}

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

export interface Params {
  page?: number;
}

interface ApiResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

const tmdbApi = {
  getMoviesList: (type: MovieType, params: Params) => {
    const url = "movie/" + type;
    return axiosClient.get<any, ApiResponse<Movie>>(url, {
      params: params,
    });
  },
  // getTvList: (type: number, params: any) => {
  //     const url = 'tv/' + tvType[type];
  //     return axiosClient.get(url, params);
  // },
  getVideos: (cate: Category, id: number) => {
      const url = cate + '/' + id + '/videos';
      return axiosClient.get<any, ApiResponse<Video>>(url, {params: {}});
  },
  // search: (cate: number, params: any) => {
  //     const url = 'search/' + category[cate];
  //     return axiosClient.get(url, params);
  // },
  // detail: (cate: number, id: string, params: any) => {
  //     const url = category[cate] + '/' + id;
  //     return axiosClient.get(url, params);
  // },
  // credits: (cate: number, id: string) => {
  //     const url = category[cate] + '/' + id + '/credits';
  //     return axiosClient.get(url, {params: {}});
  // },
  // similar: (cate: number, id: string) => {
  //     const url = category[cate] + '/' + id + '/similar';
  //     return axiosClient.get(url, {params: {}});
  // },
};

export default tmdbApi;
