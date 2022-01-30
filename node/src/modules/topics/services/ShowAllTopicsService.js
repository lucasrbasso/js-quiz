import prismaCLient from '../../../databases/prismaCliente';
import AppError from '../../shared/errors/appError';

class ShowAllTopicsService {
  async execute() {
    const topics = await prismaCLient.topics.findMany();

    if (!topics) {
      throw new AppError('Something went wrong');
    }

    return topics;
  }
}

export { ShowAllTopicsService };
