
import NavBar from '../ui/NavBar/index.jsx';
import Header from '../ui/Header/index.jsx';


import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <section>
        <Header />

        <Outlet />
        <NavBar />
      </section>
    </>
  );
}
