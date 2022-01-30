import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class ShowQuizService {
  async execute(id) {
    const quiz = await prismaCLient.quizzes.findFirst({
      where: {
        id,
      },
    });

    if (!quiz) {
      throw new AppError('Quiz does not exist');
    }

    return quiz;
  }
}

export { ShowQuizService };
