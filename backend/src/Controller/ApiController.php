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

    #[Route('/api/category/{id}', name: 'app_api_category')]
    public function readCategory(Category $cat, SerializerInterface $serializer ): Response
    {
      $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/watchlist/{id}', name: 'app_api_category')]
    public function readWatchlist(Category $cat, SerializerInterface $serializer ): Response
    {
      $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
      $response = new JsonResponse( $data );
      return $response;
    }

    


}
