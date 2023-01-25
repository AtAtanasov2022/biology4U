import api from './api';
import SubTopicService from './subTopic.service';

class TopicService {
    getAllTopics() {
        return api.get('/topics');
    }

    async getAllTopicsAndShortSubTopics() {
        let finalArray = [];
        let topics = await this.getAllTopics();
        let subTopics = await SubTopicService.getAllSubTopicsShort();

        for (let index = 0; index < topics.data.length; index++) {
            let itemsArray = [];
            for (let index2 = 0; index2 < subTopics.data.length; index2++) {
                let tempElement = subTopics.data[index2];
                if (tempElement.topicId === topics.data[index].id) {
                    itemsArray.push({
                        id: tempElement.id,
                        subTopicName: tempElement.subTopicName
                    })
                }
            }

            let element = {
                title: topics.data[index].topicName,
                items: itemsArray,
            }
            finalArray.push(element)
        }
        return finalArray;
    }
}

export default new TopicService();