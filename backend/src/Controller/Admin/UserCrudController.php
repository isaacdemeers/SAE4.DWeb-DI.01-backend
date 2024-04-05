<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;

use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;


class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
{
  $email = EmailField::new('email');
  $roles = ChoiceField::new('roles');
  $roles->setChoices(['ROLE_USER'=>'ROLE_USER', 'ROLE_ADMIN'=>'ROLE_ADMIN']);
  $roles->allowMultipleChoices();
  $age = NumberField::new('age');
    $name = TextField::new('name');
    $number = NumberField::new('number');
    $firstName = TextField::new('firstName');

  



  return [
     $email,
     $roles,
        $age,
        $name,
        $number,
        $firstName,
        
  ];
}


    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
