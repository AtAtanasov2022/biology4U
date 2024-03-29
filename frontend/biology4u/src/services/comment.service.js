import api from './api';
import requestWrapper from './requestwrapper';

class CommentService {
    async getComments(subTopicId) {
        return await requestWrapper(api.get(`/comments/${subTopicId}`));
    }

    async getAllCommentsAndUserInfo(subTopicId) {
        let finalComments = [];
        let comments = await this.getComments(subTopicId);

        for (let index = 0; index < comments.length; index++) {
            const element = {
                id: comments[index].id,
                content: comments[index].content,
                UserId: comments[index].UserId,
                SubTopicId: comments[index].SubTopicId,
                creatorInfo: {
                    username: comments[index].User.username,
                }
            };
            finalComments.push(element);
        }

        return finalComments;
    }

    async addComment(comment) {
        return requestWrapper(api.post('/comments', comment));
    }
}

export default new CommentService;