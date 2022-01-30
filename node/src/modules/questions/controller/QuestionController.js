import { CreateQuestionService } from '../services/CreateQuestionService';
import { UpdateQuestionService } from '../services/UpdateQuestionService';
import { ShowQuestionService } from '../services/ShowQuestionService';
import { ShowAllQuestionsService } from '../services/ShowAllQuestionsService';
import { ShowQuestionsByQuizService } from '../services/ShowQuestionsByQuizService';
import { DeleteQuestionService } from '../services/DeleteQuestionService';

export class QuestionController {
  async create(request, response) {
    try {
      const question = request.body;

      const service = new CreateQuestionService();
      const result = await service.execute(question);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async update(request, response) {
    try {
      const question = request.body;
      const { questionId } = request.params;

      const service = new UpdateQuestionService();
      const result = await service.execute(question, questionId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async show(request, response) {
    try {
      const { questionId } = request.params;

      const service = new ShowQuestionService();
      const result = await service.execute(questionId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async index(request, response) {
    try {
      const service = new ShowAllQuestionsService();
      const result = await service.execute();

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async indexByQuiz(request, response) {
    try {
      const { quizId } = request.params;

      const service = new ShowQuestionsByQuizService();
      const result = await service.execute(quizId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const { question_id } = request.params;

      const service = new DeleteQuestionService();
      const result = await service.execute(question_id);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { QuestionController };
