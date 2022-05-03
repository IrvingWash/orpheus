import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Track } from './track.schema';

export type CommentDocument = Comment & mongoose.Document;

@Schema()
export class Comment {
	@Prop()
	public username: string;

	@Prop()
	public message: string;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Track',
	})
	public track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
