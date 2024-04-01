<?php

namespace App\Entity;

use App\Repository\MovieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;



#[ORM\Entity(repositoryClass: MovieRepository::class)]
#[Groups(['json_movie'])]
class Movie
{
    #[ORM\Id]
   #[ORM\GeneratedValue]
   #[ORM\Column]
   #[Groups(['json_category'])]
   private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'movies')]
    private Collection $category;

    #[ORM\Column(length: 500, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?int $year = null;

    #[ORM\Column(nullable: true)]
    private ?int $duration = null;

    #[ORM\Column(nullable: true)]
    private ?int $pegi = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $imgName = null;

    #[ORM\Column(length: 255)]
    private ?string $embedLink = null;

    #[ORM\Column(nullable: true)]
    private ?int $featured = null;

    public function __construct()
    {
        $this->category = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->category->removeElement($category);

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(?int $year): static
    {
        $this->year = $year;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(?int $duration): static
    {
        $this->duration = $duration;

        return $this;
    }

    public function getPegi(): ?int
    {
        return $this->pegi;
    }

    public function setPegi(?int $pegi): static
    {
        $this->pegi = $pegi;

        return $this;
    }

    public function getImgName(): ?string
    {
        return $this->imgName;
    }

    public function setImgName(?string $imgName): static
    {
        $this->imgName = $imgName;

        return $this;
    }

    public function getEmbedLink(): ?string
    {
        return $this->embedLink;
    }

    public function setEmbedLink(string $embedLink): static
    {
        $this->embedLink = $embedLink;

        return $this;
    }

    public function getFeatured(): ?int
    {
        return $this->featured;
    }

    public function setFeatured(?int $featured): static
    {
        $this->featured = $featured;

        return $this;
    }

    
}
