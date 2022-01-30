import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class DeleteQuestionService {
  async execute(id) {
    const checkIfQuestionsExists = await prismaCLient.questions.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfQuestionsExists) {
      throw new AppError('Quiz does not exist');
    }

    const deletedQuestion = await prismaCLient.questions.delete({
      where: {
        id,
      },
    });

    return deletedQuestion;
  }
}

export { DeleteQuestionService };
