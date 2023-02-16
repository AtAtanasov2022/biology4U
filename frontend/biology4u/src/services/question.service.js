import api from './api';
import requestWrapper from './requestwrapper';

class QuestionService {
    getAllQuestionsById(subTopicId) {
        return requestWrapper(api.get(`/questions/${subTopicId}`));
    }

    getAllQuestionsByTopic(topicTitle) {
        return requestWrapper(api.get(`/questions/topics/${topicTitle}`));
    }
}

export default new QuestionService;