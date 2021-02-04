import { HttpService } from './HttpService'

export class CommentService extends HttpService {
    
    addComment(comment){
        return this.axios.post('createComment', comment)
    }
}                           

export const commentService = new CommentService()