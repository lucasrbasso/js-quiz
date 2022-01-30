import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class ShowAllAnswersService {
  async execute() {
    const Answers = await prismaCLient.answers.findMany();

    if (!Answers) {
      throw new AppError('Something went wrong');
    }

    return Answers;
  }
}

export { ShowAllAnswersService };
