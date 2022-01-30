import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/appError';

class ShowQuestionsByQuizService {
  async execute(quiz_id) {
    const questions = await prismaCLient.questions.findMany({
      where: {
        quiz_id,
      },
    });

    if (!questions) {
      throw new AppError('Something went wrong');
    }

    return questions;
  }
}

export { ShowQuestionsByQuizService };
