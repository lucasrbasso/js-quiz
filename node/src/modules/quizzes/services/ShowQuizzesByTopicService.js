import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/appError';

class ShowQuizzesByTopicService {
  async execute(topic_id) {
    const quizzes = await prismaCLient.quizzes.findMany({
      where: {
        topic_id,
      },
    });

    if (!quizzes) {
      throw new AppError('Something went wrong');
    }

    return quizzes;
  }
}

export { ShowQuizzesByTopicService };
