<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface; 
use App\Entity\Movie;
use App\Entity\Category;


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


    


}
