import { Link } from 'react-router-dom';

import Button from '../Button/index.jsx';

let createCategory = function (categoryies) {
  return categoryies.map((category, index) => {
    return <option key={index} value={category['id']}>{category['name']}</option>
  })
}

export default function Header({ categories }) {
  return (
    <nav className="bg-black bg-opacity-60 backdrop-blur-lg flex absolute md:fixed top-0 z-40 w-full justify-between p-4">
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
        <Link to={'/searchMovies/all'} className='cursor-pointer'><img src="assets/icons/search.svg" alt="" /></Link>
        <select className='text-sm hidden md:block p-1 rounded-md' name="bay" id="bay">
          <option value="all">All</option>
          {createCategory(categories)}
        </select>
        <Button type={''} style={'live'} text={'• LIVE'} />
        <Button type={''} style={'blackBordered'} text={'Become A Member'} />
        <Link to={'/account'} className='cursor-pointer hidden md:visible'><img src="assets/icons/user-circle-width.svg" alt="" /></Link>




      </div>
    </nav>
  )
}