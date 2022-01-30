import { CreateQuizService } from '../services/CreateQuizService';
import { UpdateQuizService } from '../services/UpdateQuizService';
import { ShowQuizService } from '../services/ShowQuizService';
import { ShowAllQuizzesService } from '../services/ShowAllQuizzesService';
import { ShowQuizzesByTopicService } from '../services/ShowQuizzesByTopicService';
import { DeleteQuizService } from '../services/DeleteQuizService';

export class QuizController {
  async create(request, response) {
    try {
      const quiz = request.body;

      const service = new CreateQuizService();
      const result = await service.execute(quiz);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async update(request, response) {
    try {
      const quiz = request.body;
      const { quizId } = request.params;

      const service = new UpdateQuizService();
      const result = await service.execute(quiz, quizId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async show(request, response) {
    try {
      const { quizId } = request.params;

      const service = new ShowQuizService();
      const result = await service.execute(quizId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async index(request, response) {
    try {
      const service = new ShowAllQuizzesService();
      const result = await service.execute();

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async indexByTopic(request, response) {
    try {
      const { topic_id } = request.params;

      const service = new ShowQuizzesByTopicService();
      const result = await service.execute(topic_id);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const { quizId } = request.params;

      const service = new DeleteQuizService();
      const result = await service.execute(quizId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { QuizController };
