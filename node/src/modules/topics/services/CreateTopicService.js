import prismaCLient from '../../../databases/prismaCliente';

class CreateTopicService {
  async execute(topic) {
    const newTopic = await prismaCLient.topics.create({
      data: {
        title: topic.title,
        image_url: topic.image_url,
        description: topic.description,
      },
    });

    return newTopic;
  }
}

export { CreateTopicService };
