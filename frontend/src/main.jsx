// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { cn } from './lib/utils.js';
import { redirect } from "react-router-dom";

// CSS
import './index.css';

// ROUTES
import RootPage, { loader as loaderRootPage } from './routes/rootPage.jsx';
import PlayerPage, { loader as loaderPlayerPage } from './routes/playerPage.jsx';
import ContentPage, { loader as loaderContentPage } from './routes/contentPage.jsx';
import ResultPage, { loader as loaderResultPage } from './routes/resultPage.jsx';
import WatchListPage, { loader as loaderWatchListPage } from './routes/watchListPage.jsx';
import UserPage, { loader as loaderUserPage } from './routes/UserPage.jsx';



import getUser, { logout } from './lib/loaders.js';



// UI
import Catalogue from './ui/Card';
import ErrorPage from './ui/ErrorPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    loader: async () => {
      // const user = await getUser();
      // if (!user) {
      //   return redirect("http://localhost:8080/login");
      // }
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
          const user = await getUser();
          if (!user) {
            return redirect("http://localhost:8080/login");
          }
          return loaderPlayerPage({ params });
        },
      },

      {
        path: 'watchList',
        element: <WatchListPage />,
        loader: async () => {
          const user = await getUser();
          if (!user) {
            return redirect("http://localhost:8080/login");
          }
          return loaderWatchListPage();
        },
      },

      {
        path: 'user/:section',
        element: <UserPage />,
        loader: async ({ params }) => {
          const user = await getUser();
          if (!user) {
            return redirect("http://localhost:8080/login");
          }
          return loaderUserPage({ params });

        },

      },

      {
        path: 'logout',
        element: <UserPage />,
        loader: async () => {
          await logout();
          return redirect("/movies");
        },

      },
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
