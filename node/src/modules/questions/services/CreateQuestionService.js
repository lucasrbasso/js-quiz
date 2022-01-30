import prismaCLient from '../../../databases/prismaCliente';

class CreateQuestionService {
  async execute(question) {
    const newQuestion = await prismaCLient.questions.create({
      data: {
        quiz_id: question.quiz_id,
        question: question.question,
        image_url: question.image_url,
        answer: question.answer,
      },
    });

    return newQuestion;
  }
}

export { CreateQuestionService };
