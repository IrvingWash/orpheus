import { ObjectId } from 'mongoose';

export class AddCommentDto {
	public readonly username: string;
	public readonly message: string;
	public readonly trackId: ObjectId;
}
