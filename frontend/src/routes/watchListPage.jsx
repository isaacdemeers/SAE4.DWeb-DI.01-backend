
import { useLoaderData } from 'react-router-dom';
import { fetchwatchList, fetchMovies } from '../lib/loaders';
import getUser from '../lib/loaders.js';


import WatchList from '../ui/WatchList';
import Back from '../ui/Back';




export async function loader() {
  let watchlist = await fetchwatchList();
  return watchlist;

}

export default function WatchListPage() {
  let data = useLoaderData();
  return (
    <>
      <Back />
      <WatchList catalogue={data} name={'WatchList'} style={'WatchListPage'} />



    </>
  );
}