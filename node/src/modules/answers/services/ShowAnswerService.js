import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class ShowAnswerService {
  async execute(id) {
    const answer = await prismaCLient.answers.findFirst({
      where: {
        id,
      },
    });

    if (!answer) {
      throw new AppError('Answer does not exist');
    }

    return answer;
  }
}

export { ShowAnswerService };
