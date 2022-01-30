import prismaCLient from '../../../databases/prismaCliente';

class CreateQuizService {
  async execute(quiz) {
    const newQuiz = await prismaCLient.quizzes.create({
      data: {
        topic_id: quiz.topic_id,
        title: quiz.title,
        image_url: quiz.image_url,
        level: quiz.level,
      },
    });

    return newQuiz;
  }
}

export { CreateQuizService };
