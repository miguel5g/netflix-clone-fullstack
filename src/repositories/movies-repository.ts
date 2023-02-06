import { Movie, MovieInput } from '../entities/movies';

interface MoviesRepository {
  findAll(): Promise<Movie[]>;
  create(movie: MovieInput): Promise<void>;
}

export { MoviesRepository };
