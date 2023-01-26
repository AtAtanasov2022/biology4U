import api from './api';
import requestWrapper from './requestwrapper';

class SubTopicService {
  getAllSubTopicsShort() {
    return requestWrapper(api.get('/subTopics'));
  }
  getSubtopicInfo(subTopicId) {
    return requestWrapper(api.get(`/subTopics/${subTopicId}`));
  }
}

export default new SubTopicService();