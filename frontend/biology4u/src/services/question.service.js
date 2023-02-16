import api from './api';
import requestWrapper from './requestwrapper';

class QuestionService {
    getAllQuestionsById(subTopicId) {
        return requestWrapper(api.get(`/questions/${subTopicId}`));
    }
}

export default new QuestionService;