import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { AddTrackDto } from './dtos/add-track.dto';

@Injectable()
export class TrackService {
	public constructor(
		@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
		@InjectModel(Comment.name) private commentModel: Model<CommentDocument>
	) {}

	public async addTrack(dto: AddTrackDto): Promise<Track> {
		const track = await this.trackModel.create({ ...dto, listens: 0 });
		
		return track;
	}

	public async getTracks(): Promise<Track[]> {
		const tracks = await this.trackModel.find();

		return tracks;
	}

	public async getTrack(id: ObjectId): Promise<Track> {
		const track = await this.trackModel.findById(id);

		if (track === null) {
			throwTrackNotFoundError();
		}

		return track;
	}

	public async deleteTrack(id: ObjectId): Promise<ObjectId> {
		const track = await this.trackModel.findByIdAndDelete(id);

		if (track === null) {
			throwTrackNotFoundError();
		}

		return track._id;
	}
}

function throwTrackNotFoundError(): never {
	throw new Error(`Track not found`);
}
