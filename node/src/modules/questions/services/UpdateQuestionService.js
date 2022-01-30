import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class UpdateQuestionService {
  async execute(question, id) {
    const checkIfQuestionExists = await prismaCLient.questions.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfQuestionExists) {
      throw new AppError('Question does not exist');
    }

    const updatedQuestions = await prismaCLient.questions.update({
      where: {
        id,
      },
      data: {
        quiz_id: question.quiz_id,
        question: question.question,
        image_url: question.image_url,
        answer: question.answer,
      },
    });

    return updatedQuestions;
  }
}

export { UpdateQuestionService };
