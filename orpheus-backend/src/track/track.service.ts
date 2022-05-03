import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { AddTrackDto } from './dtos/add-track.dto';
import { AddCommentDto } from './dtos/add-comment.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class TrackService {
	public constructor(
		@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
		@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
		private fileService: FileService
	) {}

	public async addTrack(
		dto: AddTrackDto,
		picture: Express.Multer.File,
		audio: Express.Multer.File
	): Promise<Track> {
		const audioPath = this.fileService.addFile(FileType.Audio, audio);
		const picturePath = this.fileService.addFile(FileType.Picture, picture);

		const track = await this.trackModel.create({
			...dto,
			listens: 0,
			audio: audioPath,
			picture: picturePath,
		});
		
		return track;
	}

	public async getTracks(): Promise<Track[]> {
		const tracks = await this.trackModel.find();

		return tracks;
	}

	public async getTrack(id: ObjectId): Promise<Track> {
		const track = await this.trackModel.findById(id).populate('comments');

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

	public async addComment(dto: AddCommentDto): Promise<Comment> {
		const track = await this.trackModel.findById(dto.trackId);

		if (track === null) {
			throwTrackNotFoundError();
		}

		const comment = await this.commentModel.create({ ...dto });

		track.comments.push(comment._id);

		await track.save();

		return comment;
	}

	public async listen(id: ObjectId): Promise<void> {
		const track = await this.trackModel.findById(id);

		if (track === null) {
			throwTrackNotFoundError();
		}

		track.listens += 1;

		await track.save();
	}
}

function throwTrackNotFoundError(): never {
	throw new Error(`Track not found`);
}
