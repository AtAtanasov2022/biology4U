import api from './api';

class SubTopicService {
  getAllSubTopicsShort() {
    return api.get('/subTopics');
  }
}

export default new SubTopicService();