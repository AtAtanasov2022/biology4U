import api from './api';
import requestWrapper from './requestwrapper';

class TopicService {
    getAllTopics() {
        return requestWrapper(api.get('/topics'));
    }

    async getAllTopicsAndShortSubTopics() {
        let finalArray = [];
        let topics = await this.getAllTopics();

        for (let index = 0; index < topics.length; index++) {
            const pick = arr => arr.map(({ id, subTopicName }) => ({ id, subTopicName }));
            let element = {
                title: topics[index].topicName,
                items: pick(topics[index].SubTopics),
            }
            finalArray.push(element)
        }
        return finalArray;
    }
}

export default new TopicService();