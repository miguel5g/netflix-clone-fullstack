import { CreateMovieInput } from '../../sample/src/entities/movie';

class CreateMovieValidator {
  validateName(name: string) {}

  validate(movie: CreateMovieInput) {
    this.validateName(movie.name);
  }
}
