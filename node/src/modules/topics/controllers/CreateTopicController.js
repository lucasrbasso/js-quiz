import { CreateTopicService } from '../services/CreateTopicService';

export class CreateTopicController {
  async handle(request, response) {
    const { topic } = request.body;

    const service = new CreateTopicService();

    try {
      const result = await service.execute(topic);

      return response.status(200).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreateTopicController };
