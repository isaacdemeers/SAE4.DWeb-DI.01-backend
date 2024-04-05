
import NavBar from '../ui/NavBar/index.jsx';
import Header from '../ui/Header/index.jsx';
import { Outlet, useLoaderData } from 'react-router-dom';


import { fetchMovies } from '../lib/loaders.js';



export async function loader() {

  let data = await fetchMovies();
  // return data;
  return data
}

export default function LoginPage() {
  // let data = useLoaderData();
  return (
    <>
      <section className='bg-red-400 p-80'>
        <p>dsjkhfgsdjhfg</p>
      </section>
    </>
  );
}
