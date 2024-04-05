

import { useLoaderData } from 'react-router-dom';
import { fetchMovie, addMovieToWatchlist } from '../lib/loaders';

import Player from '../ui/Player';


export async function loader({ params }) {
  let movie = await fetchMovie(params.movieName);
  await addMovieToWatchlist(movie.id);

  return movie;
}

export default function PlayerPage() {
  let data = useLoaderData();
  return (
    <>
      <Player movie={data} />
    </>
  );
}


