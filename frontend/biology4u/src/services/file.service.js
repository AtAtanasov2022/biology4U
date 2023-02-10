import api from './api';
import requestWrapper from './requestwrapper';

class FileService {
    async addFile(formData, data) {
        console.log(formData);
        return requestWrapper(api.post(`/additionalFiles/${data.userId}/${data.subTopicId}`, formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }}));
    }

    async getAllFiles(subTopicId) {
        return requestWrapper(api.get(`/additionalFiles/${subTopicId}`));
    }

    async download(fileId) {
        return api.get(`/additionalFiles/download/${fileId}`), {responseType: "blob"};
    }
}

export default new FileService;