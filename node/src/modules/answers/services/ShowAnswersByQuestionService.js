import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class ShowAnswersByQuestionService {
  async execute(question_id) {
    console.log(question_id);
    const questions = await prismaCLient.answers.findMany({
      where: {
        question_id,
      },
    });

    if (!questions) {
      throw new AppError('Something went wrong');
    }

    return questions;
  }
}

export { ShowAnswersByQuestionService };
