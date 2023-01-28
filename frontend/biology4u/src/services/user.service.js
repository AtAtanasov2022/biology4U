import api from './api';
import requestWrapper from './requestwrapper';

class UserService {
    getUserInfo(userId) {
        return requestWrapper(api.get(`/users/${userId}`));
    }
}

export default new UserService;