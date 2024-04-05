
import { useLoaderData } from 'react-router-dom';
import { fetchwatchList, fetchMovies } from '../lib/loaders.js';
import getUser from '../lib/loaders.js';


import User from '../ui/User/';





export async function loader({ params }) {
  let user = await getUser();
  let watchList = await fetchwatchList();

  return [user, params, watchList];

}

export default function UserPage() {
  let data = useLoaderData();
  return (
    <>
      <User user={data[0]} section={data[1]} watchList={data[2]} />


    </>
  );
}