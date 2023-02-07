import api from './api';
import requestWrapper from './requestwrapper';

class FileService {
    async addFile(formData) {
        console.log(formData);
        return requestWrapper(api.post('/additionalFiles', formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }}));
    }
}

export default new FileService;