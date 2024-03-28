
// import { useLoaderData } from 'react-router-dom';
// import Player from '../ui/Player';
// import { fetchMovie } from '../lib/loaders';



// export async function loader({ params }) {
//   console.log(params);
//   let data = await fetchMovie({ id: params.movieName });
//   console.log(data);
//   return data;
// }

// export default function playerPage(id) {
//   console.log(id);
//   let data = useLoaderData();
//   return ('')
//   // return (
//   //   <>
//   //     <Player movie={data} />
//   //   </>
//   // );
// }


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


