import api from './api';
import requestWrapper from './requestwrapper';
import UserService from './user.service';

class CommentService {
    async getComments(subTopicId) {
        return await requestWrapper(api.get(`/comments/${subTopicId}`));
    }

    async getAllCommentsAndUserInfo(subTopicId) {
        let finalComments = [];
        let comments = await this.getComments(subTopicId);

        for (let index = 0; index < comments.length; index++) {
            let commentUser = await UserService.getUserInfo(comments[index].UserId);
            const element = {
                id: comments[index].id,
                content: comments[index].content,
                UserId: comments[index].UserId,
                SubTopicId: comments[index].SubTopicId,
                creatorInfo: {
                    username: commentUser.username,
                }
            };
            finalComments.push(element);
        }

        return finalComments;
    }
}

export default new CommentService;