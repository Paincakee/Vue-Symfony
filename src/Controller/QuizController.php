<?php

namespace App\Controller;

use App\Repository\QuizRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class QuizController extends AbstractController
{
    private QuizRepository $quizRepository;
    private NormalizerInterface $normalizer;
    private UrlGeneratorInterface $urlGenerator;

    public function __construct(QuizRepository $quizRepository,
                                NormalizerInterface $normalizer,
                                UrlGeneratorInterface $urlGenerator)
    {
        $this->quizRepository = $quizRepository;
        $this->normalizer = $normalizer;
        $this->urlGenerator = $urlGenerator;
    }

    /**
     * @throws ExceptionInterface
     */
    #[Route('/quiz-chooser', name: 'app_quiz_chooser')]
    public function index(): Response
    {
        $quizzes = $this->quizRepository->findAll();
        $quizArray = array_map(function ($quiz) {
            return [
                'id' => $quiz->getId(),
                'title' => $quiz->getTitle(),
                'link' => $this->urlGenerator->generate('app_quiz', ['id' => $quiz->getId()]),
            ];
        }, $quizzes);
        dump($quizzes);

        return $this->render('quiz/chooser.html.twig', [
            'icon' => 'info-circle',
            'title' => 'Quiz Joiner',
            'quizzes' => $this->normalizer->normalize($quizArray, 'json', ['groups' => 'quiz-chooser']),
        ]);
    }

    #[Route('/quiz-{id}', name: 'app_quiz')]
    public function quiz(int $id): Response
    {
        $user = $this->getUser();
        $quiz = $this->quizRepository->findOneBy(['id' => $id]);

        return $this->render('quiz/game.html.twig', [
            'icon' => 'info-circle',
            'title' => 'Quiz Joiner',
            'quiz' =>  $this->normalizer->normalize($quiz, 'json', ['groups' => 'quiz-game']),
            'currentUser' =>  $this->normalizer->normalize($user, 'json', ['groups' => 'quiz-game']),
        ]);
    }

}
