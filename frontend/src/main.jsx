// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { cn } from './lib/utils.js';

// CSS
import './index.css';

// ROUTES
import RootPage, { loader as loaderRootPage } from './routes/rootPage.jsx';
import PlayerPage, { loader as loaderPlayerPage } from './routes/playerPage.jsx';
import ContentPage, { loader as loaderContentPage } from './routes/contentPage.jsx';
import ResultPage, { loader as loaderResultPage } from './routes/resultPage.jsx';




// UI
import Catalogue from './ui/Card';
import ErrorPage from './ui/ErrorPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    loader: async () => {
      return loaderRootPage();
    },
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'movies',
        element: <ContentPage />,
        loader: async () => {
          return loaderContentPage();
        },
      },

      {
        path: 'searchMovies/:text',
        element: <ResultPage />,
        loader: async ({ params }) => {
          return loaderResultPage({ params });
        },
      },

      {
        path: 'viewmovie/:movieName',
        element: <PlayerPage />,
        loader: async ({ params }) => {
          return loaderPlayerPage({ params });
        },
      }
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


if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
