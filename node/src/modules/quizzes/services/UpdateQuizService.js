import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class UpdateQuizService {
  async execute(quiz, id) {
    const checkIfQuizExists = await prismaCLient.quizzes.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfQuizExists) {
      throw new AppError('Quiz does not exist');
    }

    const updatedTopic = await prismaCLient.quizzes.update({
      where: {
        id,
      },
      data: {
        topic_id: quiz.topic_id,
        title: quiz.title,
        image_url: quiz.image_url,
        level: quiz.level,
      },
    });

    return updatedTopic;
  }
}

export { UpdateQuizService };
