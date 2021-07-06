// forwardRef is a Poinetr
import { React, forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

// this url for image
const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="video_card">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movieimage"
      />
      {/* basically this code will reduce the overveiw with ""...." */}
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      {/* <p>{movie.overview}</p> */}
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videocard_info">
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date || movie.first_air_date} .
        <ThumbUpSharp /> {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
