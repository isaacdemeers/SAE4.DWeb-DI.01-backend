
import { useLoaderData } from 'react-router-dom';
import { fetchMovies, fetchFeatured } from '../lib/loaders';

import Catalogue from '../ui/Card';
import Featured from '../ui/Featured/';
import Preview from '../ui/Preview/';



export async function loader() {
  let data = await fetchMovies();
  let featured = await fetchFeatured();
  return [data, featured];
}

export default function ContentPage() {
  let data = useLoaderData();
  return (
    <>
      <section>
        <Featured movie={data[1][0]} />

        <Catalogue catalogue={data[0]} name={'Latest'} />
        <Catalogue catalogue={data[0]} name={'Latest'} />

      </section>

    </>
  );
}