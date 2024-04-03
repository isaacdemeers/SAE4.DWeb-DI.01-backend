import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav className="bg-black md:hidden fixed bottom-0 z-40 left-0 w-full flex align-middle justify-center text-white py-4 h-[4.5rem]">
      <ul className="flex align-middle justify-evenly w-full">
        <li className=" cursor-pointer flex flex-col items-center justify-center text-[.4rem]">
          <Link to={'/'} className='flex flex-col items-center'>
            <img src="assets/icons/home.svg" alt="" />
            <span>Home</span>
          </Link>
        </li>
        <li className=" cursor-pointer flex flex-col items-center justify-center text-[.4rem]">
          <img src="assets/icons/device-tv.svg" alt="" />
          <span>Live TV</span>
        </li>
        <li className=" cursor-pointer flex flex-col items-center justify-center text-[.4rem]">
          <Link to={'/watchlist'} className='flex flex-col items-center'>
            <img src="assets/icons/eye-check.svg" alt="" />
            <span>Watchlist</span>
          </Link>
        </li>
        <li className=" cursor-pointer flex flex-col items-center justify-center text-[.4rem]">
          <Link to={'/user'} className='flex flex-col items-center'>
            <img src="assets/icons/user-circle.svg" alt="" />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

