import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/appError';

class ShowQuestionService {
  async execute(id) {
    const question = await prismaCLient.questions.findFirst({
      where: {
        id,
      },
    });

    if (!question) {
      throw new AppError('Question does not exist');
    }

    return question;
  }
}

export { ShowQuestionService };
