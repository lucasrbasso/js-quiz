import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class ShowAllQuestionsService {
  async execute() {
    const questions = await prismaCLient.questions.findMany();

    if (!questions) {
      throw new AppError('Something went wrong');
    }

    return questions;
  }
}

export { ShowAllQuestionsService };
