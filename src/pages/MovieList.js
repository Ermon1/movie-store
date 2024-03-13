import { useEffect, useState } from "react";
import Card from "../componets/Card";
import axios from "axios";

function MovieList() {
  const [movies, setMovie] = useState([]);

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a15478fbb7d039cea8102c2b81c28aba"
      );
      console.log(response);
      const { data } = response;
      setMovie(data.results); // Assuming 'results' is the array containing movie data
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    fetchMovie(); // Corrected typo here
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} /> // Assuming Card component accepts 'movie' prop
          ))}
        </div>
      </section>
    </main>
  );
}

export { MovieList };
