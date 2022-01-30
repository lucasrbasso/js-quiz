import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/appError';

class DeleteQuizService {
  async execute(id) {
    const checkIfQuizExists = await prismaCLient.quizzes.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfQuizExists) {
      throw new AppError('Quiz does not exist');
    }

    const deletedTopic = await prismaCLient.quizzes.delete({
      where: {
        id,
      },
    });

    return deletedTopic;
  }
}

export { DeleteQuizService };
