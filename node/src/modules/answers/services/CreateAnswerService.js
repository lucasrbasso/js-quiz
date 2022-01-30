import prismaCLient from '../../../databases/prismaCliente';

class CreateAnswerService {
  async execute(answer) {
    const newAnswer = await prismaCLient.answers.create({
      data: {
        question_id: answer.question_id,
        optionA: answer.optionA,
        optionB: answer.optionB,
        optionC: answer.optionC,
        optionD: answer.optionD,
      },
    });

    return newAnswer;
  }
}

export { CreateAnswerService };
