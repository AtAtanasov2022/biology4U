import api from './api';
import requestWrapper from './requestwrapper';

class TestResultsService {
  async getAllTestResultsByTopic(topicName) {
    return requestWrapper(api.get(`/testResults/topic/${topicName}`));
  }
  async addTestResult(topicName, userId, score) {
    return requestWrapper(api.post(`/testResults`, {topicName: topicName, userId: userId, score: score}));
  }
}

export default new TestResultsService();