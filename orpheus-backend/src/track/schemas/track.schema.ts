import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Comment } from './comment.schema';

export type TrackDocument = Track & mongoose.Document;

@Schema()
export class Track {
	@Prop()
	public title: string;

	@Prop()
	public artist: string;

	@Prop()
	public text: string;

	@Prop()
	public listens: number;

	@Prop()
	public picture: string;

	@Prop()
	public audio: string;

	@Prop({
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
		}],
	})
	public comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
