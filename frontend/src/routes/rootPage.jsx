
import NavBar from '../ui/NavBar';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

import { Outlet, useLoaderData } from 'react-router-dom';


import { fetchCategories } from '../lib/loaders.js';



export async function loader() {

  let data = await fetchCategories();
  return data;
}

export default function RootPage() {
  let data = useLoaderData();
  return (
    <>
      <section>
        <Header categories={data} />

        <Outlet />
        <Footer />
        <NavBar />
      </section>
    </>
  );
}
