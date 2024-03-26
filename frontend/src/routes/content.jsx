
import NavBar from '../ui/NavBar/index.jsx';
import Header from '../ui/Header/index.jsx';
import Catalogue from '../ui/Card/index.jsx';
import Preview from '../ui/Preview/index.jsx';

import { Outlet } from 'react-router-dom';

export default function Content({ data }) {
  return (
    <>
      <section>
        {/* <Preview movie={data[0]} /> */}
        <Catalogue catalogue={data} name={'Latest'} />
      </section>
    </>
  );
}
