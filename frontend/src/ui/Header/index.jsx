import { Link } from 'react-router-dom';

import Button from '../Button/index.jsx';

export default function Header() {
  return (
    <nav className="bg-black bg-opacity-60 flex absolute md:fixed top-0 z-40 w-full justify-between p-4">
      <div className="flex items-center gap-4 md:gap-8">
        <Link to={'/'}>
          <img className='w-6' src="assets/icons/logo.png" alt="" />
        </Link>

        <Link to={'/'} className="text-white hidden md:block hover:text-gray-300 text-sm" href="#">
          Home
        </Link>
        <Link to={'/movies'} className="text-white hover:text-gray-300 text-sm" href="#">
          Films
        </Link>
        <Link to={'/movies'} className="text-white  hover:text-gray-300 text-sm" href="#">
          Series
        </Link>
        <Link to={'/watchlist'} className="text-white hidden md:block hover:text-gray-300 text-sm" href="#">
          WatchList
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className='cursor-pointer'><img src="assets/icons/search.svg" alt="" /></div>
        <select className='text-sm hidden md:block p-1 rounded-md' name="bay" id="bay">
          <option value="all">All Bays</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
        <Button type={''} style={'live'} text={'• LIVE'} />
        <Button type={''} style={'blackBordered'} text={'Become A Member'} />
        <Link to={'/account'} className='cursor-pointer hidden md:visible'><img src="assets/icons/user-circle-width.svg" alt="" /></Link>




      </div>
    </nav>
  )
}