import prismaCLient from '../../../databases/prismaCliente';

class CreateTopicService {
  async execute(topic) {
    const newTopic = await prismaCLient.topics.create({
      data: {
        topic,
      },
    });

    return newTopic;
  }
}

export { CreateTopicService };
