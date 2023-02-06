import { appFactory } from './app';
import { PrismaMoviesRepository } from './repositories/prisma/prisma-movies-repository';
import { MoviesService } from './services/movies-service';

const app = appFactory();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});


const moviesService = new MoviesService()