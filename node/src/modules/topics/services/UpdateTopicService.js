import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class UpdateTopicService {
  async execute(topic, id) {
    const checkIfTopicExists = await prismaCLient.topics.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfTopicExists) {
      throw new AppError('Topic does not exist');
    }

    const updatedTopic = await prismaCLient.topics.update({
      where: {
        id,
      },
      data: {
        title: topic.title,
        image_url: topic.image_url,
        description: topic.description,
      },
    });

    return updatedTopic;
  }
}

export { UpdateTopicService };
