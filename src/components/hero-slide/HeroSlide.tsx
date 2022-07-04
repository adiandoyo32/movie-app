import { useEffect, useState } from "react";
import tmdbApi, { MovieType, Params } from "../../api/tmdb-api";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./hero-slide.scss";
import apiConfig from "../../api/api-config";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState<any[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const params: Params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(MovieType.Popular, params);
        setMovieItems(response.results.slice(0, 5));
      } catch {
        console.log("error");
      }
    };
    // getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        // modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{delay: 3000}}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <img src={apiConfig.originalImage(item.backdrop_path)} />
              // <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = () => {
  
}

export default HeroSlide;
