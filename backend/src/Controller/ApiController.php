<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface; 
use App\Entity\Movie;
use App\Entity\Category;
use App\Entity\User;
use App\Entity\Watchlist;




class ApiController extends AbstractController
{


    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    #[Route('/api/movies', name: 'app_api_movies')]
    public function readMovies(SerializerInterface $serializer ): Response
    {
      $movies = $this->entityManager->getRepository(Movie::class)->findAll();
      $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/movies/{id}', name: 'app_api_movie_by_id')]
    public function readMovie(Movie $mov, SerializerInterface $serializer ): Response
    {
      $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/categories', name: 'app_api_categories')]
    public function readCategories(SerializerInterface $serializer ): Response
    {
      $categories = $this->entityManager->getRepository(Category::class)->findAll();
      $data = $serializer->normalize($categories, null, ['groups' => 'json_category']);
      $response = new JsonResponse( $data );
      return $response;
    }


    #[Route('/api/categories/{id}', name: 'app_api_categories_by_id')]
    public function readCategoriesById(Category $cat, SerializerInterface $serializer ): Response
    {
      $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/moviesBycategories/{ids}', name: 'app_api_movies_by_categories_ids')]
    public function readMoviesByCategoriesIds($ids, SerializerInterface $serializer ): Response
    {
      // Convertir les IDs en tableau
      $ids = json_decode($ids);

      $movies = $this->entityManager->getRepository(Movie::class)->findAll();
      $moviesByCategories = [];
      foreach ($movies as $movie) {
        $categories = $movie->getCategory();
        foreach ($categories as $category) {
          if (in_array($category->getId(), $ids)) {
            $moviesByCategories[] = $movie;
            break;
          }
        }
      }

      $data = $serializer->normalize($moviesByCategories, null, ['groups' => 'json_movie']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/featured/', name: 'app_api_featured')]
    public function readFeatured(SerializerInterface $serializer ): Response
    {
      $movies = $this->entityManager->getRepository(Movie::class)->findAll();
      $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
      $response = new JsonResponse( $data );

      // // return seulement le film qui a featured = 1
      $featured = [];
      foreach ($movies as $movie) {
        if ($movie->getFeatured() == 1) {
          $featured[] = $movie;
        }
      }
      $data = $serializer->normalize($featured, null, ['groups' => 'json_movie']);
      $response = new JsonResponse( $data );
      
      return $response;
      


    }
    

    #[Route('/api/searchMovies/{text}', name: 'app_api_search')]
    public function searchMovie($text, SerializerInterface $serializer ): Response
    {

      //si le nom du film inclu le text alors on le retourne
      $movies = $this->entityManager->getRepository(Movie::class)->findAll();
      $searched = [];
      $text = strtolower($text);

      if ($text == 'all') {
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
      }

      foreach ($movies as $movie) {
        if (strpos(strtolower($movie->getName()), $text) !== false) {
          $searched[] = $movie;
        }
      }
      $data = $serializer->normalize($searched, null, ['groups' => 'json_movie']);
      $response = new JsonResponse( $data );
      return $response;
      
    }

    
    #[Route('/user', name: 'app_api_user')]
    public function getConnectedUser(): Response
    {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        if (!$user instanceof User) {
          return new Response(json_encode(''));
        }
        else {
          $payload = [
              'id' => $user->getId(),
              'email' => $user->getEmail(),
              'roles' => $user->getRoles(),
              'name' => $user->getName(),
              'age' => $user->getAge(),
              'number' => $user->getNumber(),
              'firstName' => $user->getFirstName(),
              'watchList' => $user->getWatchlist()

          ];
          
          return new JsonResponse($payload);
        }
 
    }



    #[Route('/api/watchList/add/{movieId}',  name: 'app_api_add_movie_to_watchlist')]
    public function addMovieToWatchList($movieId, SerializerInterface $serializer): Response
    {

      /** @var \App\Entity\User $user */
      $user = $this->getUser();
      
      // verifier si il y as un utilisateur connecté
      if (!$user instanceof User) {
        return new JsonResponse(['error' => 'You are not connected']);
      }

      
      $movie = $this->entityManager->getRepository(Movie::class)->find($movieId);
      $watchlist = $user->getWatchlist();
      $watchlist->addMovie($movie);
      $this->entityManager->persist($watchlist);
      $this->entityManager->flush();
      $data = $serializer->normalize($watchlist, null, ['groups' => 'json_watchlist']);
      $response = new JsonResponse( $data );
      return $response;
    }
    
  

    #[Route('/api/watchList/{userId}',  name: 'app_api_watchList_by_user_id')]
    public function getWatchListByUserId($userId, SerializerInterface $serializer): Response
    {
      // verifier a l'aide des cookies si l'utilisateur est connecté
      /** @var \App\Entity\User $user */
      $user = $this->getUser();
      
      // verifier si il y as un utilisateur connecté
      if (!$user instanceof User) {
        return new JsonResponse(['error' => 'You are not connected']);
      }

      $user = $this->entityManager->getRepository(User::class)->find($userId);
      $watchlist = $user->getWatchlist();
      $data = $serializer->normalize($watchlist, null, ['groups' => 'json_watchlist']);
      $response = new JsonResponse( $data );
      return $response;
    }



    
}



      // // recuperer la watchlist de l'utilisateur et la retourner
      // $watchlist = $user->getWatchlist();
      // $data = $serializer->normalize($watchlist, null, ['groups' => 'json_watchlist']);
      // $response = new JsonResponse( $data );




        // if (!$user instanceof User) {
        //   return new Response(json_encode(''));
        // }
        // else {
        //   $payload = [
        //       'watchList' => $user->getWatchlist()

        //   ];
          
        //   return new JsonResponse($payload);
        // }


