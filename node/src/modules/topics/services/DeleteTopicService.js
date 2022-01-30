import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/AppError';

class DeleteTopicService {
  async execute(id) {
    const checkIfTopicExists = await prismaCLient.topics.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfTopicExists) {
      throw new AppError('Topic does not exist');
    }

    const deletedTopic = await prismaCLient.topics.delete({
      where: {
        id,
      },
    });

    return deletedTopic;
  }
}

export { DeleteTopicService };
