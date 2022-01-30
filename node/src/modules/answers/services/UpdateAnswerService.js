import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class UpdateAnswerService {
  async execute(answer, id) {
    const checkIfAnswerExists = await prismaCLient.answers.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfAnswerExists) {
      throw new AppError('Quiz does not exist');
    }

    const updatedTopic = await prismaCLient.answers.update({
      where: {
        id,
      },
      data: {
        question_id: answer.question_id,
        optionA: answer.optionA,
        optionB: answer.optionB,
        optionC: answer.optionC,
        optionD: answer.optionD,
      },
    });

    return updatedTopic;
  }
}

export { UpdateAnswerService };
