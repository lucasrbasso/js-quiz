import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/appError';

class DeleteAnswerService {
  async execute(id) {
    const checkIfAnswerExists = await prismaCLient.answers.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfAnswerExists) {
      throw new AppError('Answer does not exist');
    }

    const deletedAnswer = await prismaCLient.answers.delete({
      where: {
        id,
      },
    });

    return deletedAnswer;
  }
}

export { DeleteAnswerService };
