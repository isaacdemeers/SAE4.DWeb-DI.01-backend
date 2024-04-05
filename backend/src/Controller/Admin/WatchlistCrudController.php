<?php

namespace App\Controller\Admin;

use App\Entity\Watchlist;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;


class WatchlistCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Watchlist::class;
    }

    public function configureFields(string $pageName): iterable
    {
            yield IdField::new('id');
            yield AssociationField::new('user')->formatValue(function ($value, $entity) {
                // Vous pouvez spécifier ici la manière de formater la valeur affichée
                // Par exemple, afficher le nom de l'utilisateur
                return $value->getUsername();
            });
    
            yield AssociationField::new('movies');
    }
}
