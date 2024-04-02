import { Link } from 'react-router-dom';

import Button from '../Button/index.jsx';
import Card from '../Card/Card.jsx';



export default function Result({ results }) {

  // si la longueur de result est egal a 0
  if (results.length === 0) {
    return (
      <section className='flex flex-col align-top mt-§ p-10 justify-start w-full h-80'>
        <h4 className='text-white w-full text-center mt-10 text-4xl'>No results found</h4>
      </section>
    )
  }

  let movies = [];
  for (let elt of results) {
    movies.push(
      <Card data={elt} />
    );
  }

  return (
    <>
      <section className='flex flex-col align-top mt-5 p-10 justify-start w-full h-80'>

        <h4 className='text-white mt-10 text-4xl'>Results</h4>

        <ul className='flex align-top mt-10 gap-5 justify-start flex-wrap w-full h-80'>

          {movies}

        </ul>
      </section>

    </>
  )
}