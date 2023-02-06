import { Movie, MovieInput } from '../../entities/movies';
import { prisma } from '../../utils/prisma';
import { MoviesRepository } from '../movies-repository';

class PrismaMoviesRepository implements MoviesRepository {
  async findAll(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({ include: { categories: true } });

    return movies;
  }

  create(movie: MovieInput): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { PrismaMoviesRepository };
