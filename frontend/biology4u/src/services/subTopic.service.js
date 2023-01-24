import api from './api';

class SubTopicService {
  getAllSubTopicsShort() {
    return api.get('/subTopics');
  }
  getSubtopicInfo(subTopicId) {
    return api.get(`/subTopics/${subTopicId}`);
  }
}

export default new SubTopicService();