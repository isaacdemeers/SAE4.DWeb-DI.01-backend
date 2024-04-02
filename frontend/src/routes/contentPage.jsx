
import { useLoaderData } from 'react-router-dom';
import { fetchMovies, fetchFeatured } from '../lib/loaders';

import Catalogue from '../ui/Card';
import Featured from '../ui/Featured/';



export async function loader() {
  let data = await fetchMovies();
  let featured = await fetchFeatured();
  return [data, featured];
}
let filter = (data, name) => {
  return data.filter((movie) => {
    return movie.category.some((category) => {
      return category.name === name;
    });
  });
}

export default function ContentPage() {
  let data = useLoaderData();
  console.log();
  return (
    <>
      <section>
        <Featured movie={data[1][0]} />

        <Catalogue catalogue={data[0]} name={'Latest'} />
        <Catalogue catalogue={filter(data[0], 'Action')} name={'Action'} />
        <Catalogue catalogue={filter(data[0], 'Adventure')} name={'Adventure'} />

        <Catalogue catalogue={filter(data[0], 'Thriller')} name={'Thriller'} />



      </section>

    </>
  );
}