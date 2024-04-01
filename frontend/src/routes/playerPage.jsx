

import { useLoaderData } from 'react-router-dom';
import { fetchMovie } from '../lib/loaders';

import Player from '../ui/Player';


export async function loader({ params }) {
  console.log(params.movieName);
  let data = await fetchMovie(params.movieName);
  return data;
}

export default function PlayerPage() {
  let data = useLoaderData();
  console.log(data);
  return (
    <>
      <Player movie={data} />
    </>
  );
}


