import React from "react";
import "./Movie.css";
import { Link } from 'react-router-dom';

interface MoveProps {
  id?: number;
  year: string;
  title: string;
  summary: string;
  poster: string;
  genres: string[];
  runtime: number;
}

function hour(n:number):string {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (rhours < 1 ? `${rminutes} m`:`${rhours} h ${rminutes} m`);
  }

function Movie({ year, title, summary, poster, genres, runtime }:MoveProps):JSX.Element {
  return (
    <Link to={{
        pathname: '/movie-detail',
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }

    }}>
        <div className="movie">
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <h5>{runtime < 10 ? null : hour(runtime)}</h5>

            <p className="movie__summary">{summary.slice(0, 180)}...</p>
          </div>
        </div>
     </Link>
  );
}

export default Movie;