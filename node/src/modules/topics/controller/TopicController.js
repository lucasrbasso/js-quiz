import { CreateTopicService } from '../services/CreateTopicService';
import { UpdateTopicService } from '../services/UpdateTopicService';
import { ShowTopicService } from '../services/ShowTopicService';
import { ShowAllTopicsService } from '../services/ShowAllTopicsService';
import { DeleteTopicService } from '../services/DeleteTopicService';

export class TopicController {
  async create(request, response) {
    try {
      const topic = request.body;

      const service = new CreateTopicService();
      const result = await service.execute(topic);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async update(request, response) {
    try {
      const topic = request.body;
      const { topicId } = request.params;

      const service = new UpdateTopicService();
      const result = await service.execute(topic, topicId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async show(request, response) {
    try {
      const { topicId } = request.params;

      const service = new ShowTopicService();
      const result = await service.execute(topicId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async index(request, response) {
    try {
      const service = new ShowAllTopicsService();
      const result = await service.execute();

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const { topicId } = request.params;

      const service = new DeleteTopicService();
      const result = await service.execute(topicId);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { TopicController };
