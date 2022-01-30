import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/appError';

class ShowAllQuizzesService {
  async execute() {
    const quizzes = await prismaCLient.quizzes.findMany();

    if (!quizzes) {
      throw new AppError('Something went wrong');
    }

    return quizzes;
  }
}

export { ShowAllQuizzesService };
