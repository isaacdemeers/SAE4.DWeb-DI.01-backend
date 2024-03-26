// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchApiData } from './lib/loaders.js';
import { cn } from './lib/utils.js';

// CSS
import './index.css';

// ROUTES
import Root from './routes/root.jsx';
import Content from './routes/content.jsx';


// UI
import Catalogue from './ui/Card/';
import ErrorPage from './ui/ErrorPage/index.jsx';



// let data = {
//   0: {
//     id: 1013,
//     title: 'The Shawshank Redemption',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '1994',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Drama',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
//   1: {
//     id: 103,
//     title: 'The Shawshank KIll',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '2000',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Sci-Fi',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
//   2: {
//     id: 10323,
//     title: 'The Shawshank KIll',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '2000',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Sci-Fi',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
//   3: {
//     id: 10343,
//     title: 'The Shawshank KIll',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '2000',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Sci-Fi',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
//   4: {
//     id: 13203,
//     title: 'The Shawshank KIll',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '2000',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Sci-Fi',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
//   5: {
//     id: 10543,
//     title: 'The Shawshank KIll',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '2000',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Sci-Fi',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
//   6: {
//     id: 10223,
//     title: 'The Shawshank KIll',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '2000',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Sci-Fi',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
//   7: {
//     id: 11103,
//     title: 'The Shawshank KIll',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '2000',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Sci-Fi',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
//   8: {
//     id: 1103,
//     title: 'The Shawshank KIll',
//     imgBig: 'm1.png',
//     embedLink: 'hYHdP89UqTs',
//     year: '2000',
//     duration: '2h 22min',
//     age: '16+',
//     categorie: 'Sci-Fi',
//     description: 'Two imprisoned lorem imprisonedimprisonedimpris onedimprisonedimpri sonedimprisonedimpr isonedimprisonedimprisonedimpr isonedimprisoned'
//   },
// }

let data = await fetchApiData();
console.log(data);


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'movies',
        element: <Content data={data} />,
        // loader: buyLoader,

      },
      // {
      //   path: 'about',
      //   element: <About />
      // },
      // {
      //   path: 'team/:teamName',
      //   element: <OurTeams />,
      //   loader: async ({ params }) => {
      //     return ourTeamsLoader({ params });
      //   },

      // },

    ]
  }

]);

const rootElement = document.querySelector('#root');

console.log(await fetchApiData());

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
