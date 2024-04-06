import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function SearchBar() {

  //si searchTerm est vide on le met a 'all'
  let text = ''

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    text = searchTerm;
  }

  if (searchTerm === '') {
    text = 'all';
  }
  else {
    text = searchTerm;
  }
  return (
    <section className='flex justify-start mt-24 px-5 gap-5 align-top flex-col'>
      <Button className='' type="link" link="movies" style="noPad" text="Back" icon='arrowLeft'></Button>

      <div className='w-full  flex align-middle justify-center  gap-5'>

        <input className='text-sm block w-96 text-black p-2 rounded-md'
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Rechercher des films..."
        />
        <Link className='' to={`/searchMovies/${text}`}>
          <Button type="action" additionalStyles='' style="search" text="Search"></Button>

        </Link>
      </div >

    </section>

  );
};

SearchBar;
