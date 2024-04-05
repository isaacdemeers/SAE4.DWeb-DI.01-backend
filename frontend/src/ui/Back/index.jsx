import { Link } from 'react-router-dom';

import Button from '../Button/index.jsx';



export default function Back() {

  return (
    <>
      <div className=' flex align-middle justify-start w-full mx-10 mt-28'>
        <div className=' hover:bg-borders [transition:all_.3s] rounded-lg px-4 py-1'>
          <Button className='' type="link" link="movies" style="noPad" text="Back" icon='arrowLeft'></Button>
        </div>
      </div>

    </>
  )
}