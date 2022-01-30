import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class ShowTopicService {
  async execute(id) {
    const topic = await prismaCLient.topics.findFirst({
      where: {
        id,
      },
    });

    if (!topic) {
      throw new AppError('Topic does not exist');
    }

    return topic;
  }
}

export { ShowTopicService };
