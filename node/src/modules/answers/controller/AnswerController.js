import { CreateAnswerService } from '../services/CreateAnswerService';
import { UpdateAnswerService } from '../services/UpdateAnswerService';
import { ShowAnswerService } from '../services/ShowAnswerService';
import { ShowAllAnswersService } from '../services/ShowAllAnswersService';
import { ShowAnswersByQuestionService } from '../services/ShowAnswersByQuestionService';
import { DeleteAnswerService } from '../services/DeleteAnswerService';

export class AnswerController {
  async create(request, response) {
    try {
      const answer = request.body;

      const service = new CreateAnswerService();
      const result = await service.execute(answer);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async update(request, response) {
    try {
      const answer = request.body;
      const { answerId } = request.params;

      const service = new UpdateAnswerService();
      const result = await service.execute(answer, answerId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async show(request, response) {
    try {
      const { answerId } = request.params;

      const service = new ShowAnswerService();
      const result = await service.execute(answerId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async index(request, response) {
    try {
      const service = new ShowAllAnswersService();
      const result = await service.execute();

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async indexByQuestion(request, response) {
    try {
      const { questionId } = request.params;

      const service = new ShowAnswersByQuestionService();
      const result = await service.execute(questionId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const { answerId } = request.params;

      const service = new DeleteAnswerService();
      const result = await service.execute(answerId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { AnswerController };
