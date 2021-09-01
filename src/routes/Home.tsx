import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

export interface HomeProps {
  id?: number;
  year: string;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: string[];
  runtime: number;
}

interface HomeState {
  isLoading: boolean;
  movies: Array<HomeProps>
}


class Home extends React.Component<HomeProps,HomeState> {
  constructor(props:any){
    super(props);
    
    this.state = {
      isLoading: true,
      movies: []
    };
  }
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render():JSX.Element {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                runtime={movie.runtime}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;