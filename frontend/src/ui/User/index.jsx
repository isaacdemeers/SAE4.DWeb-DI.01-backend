import Card from "../Card/Card.jsx";
import Button from "../Button/";
import Back from '../Back/';
import WatchList from '../WatchList/';
import { Link } from "react-router-dom";

import { removeMovieFromWatchlist } from "../../lib/loaders.js";







export default function User({ user, section, watchList }) {

  console.log(user);

  function createNavItem(name, link, icon) {

    if (link === 'logout') {
      return (
        <li className="hover:bg-dark [transition:all_.3s] rounded-lg px-5 py-2 mr-5">
          <Button className='' type="link" link={link} style="noPad" text={name} additionalStyles={'text-primary'} icon={icon}></Button>
        </li>
      )
    }
    return (
      <li className="hover:bg-dark [transition:all_.3s] rounded-lg px-5 py-2 mr-5">
        <Button className='' type="link" link={'user/' + link} style="noPad" text={name} icon={icon}></Button>
      </li>
    )
  }


  function createInfos(title, data) {

    return (
      <li className=" flex align-top justify-center flex-col w-full rounded-xl p-5 gap-2 text-white shadow-2xl ">
        <p className="text-light">{title}</p>
        <p>{data}</p>
      </li>
    )
  }

  let content = null;


  if (section.section === 'profile') {
    content = (
      <ul className=" w-full p-10">
        {createInfos('Last name', user.name)}
        {createInfos('First name', user.firstName)}
        {createInfos('Age', user.age)}

        {createInfos('Email', user.email)}
        {createInfos('Phone number', user.number)}
      </ul>
    )
  }

  if (section.section === 'watchlist') {
    content = (
      <>
        <WatchList catalogue={watchList} name="" style="WatchListPage" />

        <div className=' flex align-middle justify-start w-full mx-10'>
          <Link to={'/user/watchlist'} onClick={removeMovieFromWatchlist} >
            <div className=' hover:bg-borders [transition:all_.3s] rounded-lg px-5 py-3'>
              Delete my watchlist

            </div>
          </Link>

        </div>

      </>
    )
  }

  return (
    // genere moi une page utilisateur avec les informations de l'utilisateur
    <section className='flex md:h-screen w-screen mb-14 flex-col md:flex-row'>

      <ul className=" bg-gradient-to-t from-dark w-full h-auto md:w-96 md:h-full flex align-middle justify-start flex-col pl-5 pt-5 bg-borders mt-[73px] ">
        <li className="p-5">
          <p className=" font-bold text-3xl text-white">Account</p>
        </li>
        {createNavItem('Personal informations', 'profile', 'user-circle')}
        {createNavItem('Watchlist', 'watchlist', 'eye-check')}
        {createNavItem('Logout', 'logout', 'logout')}

      </ul>
      <div className="w-full mb-10">
        <Back />

        {content}

      </div>
    </section>

  )


}
