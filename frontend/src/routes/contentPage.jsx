
import { useLoaderData } from 'react-router-dom';
import getUser, { fetchMovies, fetchFeatured, fetchwatchList } from '../lib/loaders';

import Catalogue from '../ui/Card';
import Featured from '../ui/Featured/';
import Preview from '../ui/Preview/';
import WatchList from '../ui/WatchList';




export async function loader() {
  let data = await fetchMovies();
  let featured = await fetchFeatured();
  let watchlist = await fetchwatchList();
  let user = await getUser();

  return [data, featured, watchlist, user];
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

  function isUser() {
    let user = data[3];
    if (user && data[2]) {
      return (
        <WatchList catalogue={data[2]} name={'WatchList'} />

      )
    }
  }

  return (
    <>
      <section>
        <Featured movie={data[1][0]} />

        <Catalogue catalogue={data[0]} name={'Latest'} />

        {isUser()}

        <Catalogue catalogue={filter(data[0], 'Action')} name={'Action'} />
        <Catalogue catalogue={filter(data[0], 'Adventure')} name={'Adventure'} />

        <Catalogue catalogue={filter(data[0], 'Thriller')} name={'Thriller'} />

      </section>

    </>
  );
}