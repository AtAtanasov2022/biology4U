import api from './api';
import requestWrapper from './requestwrapper';
import SubTopicService from './subTopic.service';

class TopicService {
    getAllTopics() {
        return requestWrapper(api.get('/topics'));
    }

    async getAllTopicsAndShortSubTopics() {
        let finalArray = [];
        let topics = await this.getAllTopics();
        let subTopics = await SubTopicService.getAllSubTopicsShort();

        for (let index = 0; index < topics.length; index++) {
            let itemsArray = [];
            for (let index2 = 0; index2 < subTopics.length; index2++) {
                let tempElement = subTopics[index2];
                if (tempElement.topicId === topics[index].id) {
                    itemsArray.push({
                        id: tempElement.id,
                        subTopicName: tempElement.subTopicName
                    })
                }
            }

            let element = {
                title: topics[index].topicName,
                items: itemsArray,
            }
            finalArray.push(element)
        }
        return finalArray;
    }
}

export default new TopicService();