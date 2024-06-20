<?php

namespace App\Controller\Admin;

use App\Entity\Quiz;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class QuizCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Quiz::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title'),
            CollectionField::new('questions')->hideOnForm(),
        ];
    }

}
