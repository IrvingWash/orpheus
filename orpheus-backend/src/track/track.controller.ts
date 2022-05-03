import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query,
	UploadedFiles,
	UseInterceptors,
} from '@nestjs/common';

import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';

import { AddCommentDto } from './dtos/add-comment.dto';
import { AddTrackDto } from './dtos/add-track.dto';
import { Comment } from './schemas/comment.schema';
import { Track } from './schemas/track.schema';
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
	public constructor (
		private trackService: TrackService
	) {}

	@Post()
	@UseInterceptors(FileFieldsInterceptor([
		{
			name: 'picture',
			maxCount: 1,
		},
		{
			name: 'audio',
			maxCount: 1,
		},
	]))
	public async addTrack(
		@Body() dto: AddTrackDto,
		@UploadedFiles() files: {
			picture: Express.Multer.File[],
			audio: Express.Multer.File[],
		}
	): Promise<Track> {
		const { picture, audio } = files;

		return await this.trackService.addTrack(dto, picture[0], audio[0]);
	}

	@Get()
	public async getTracks(
		@Query('count') count: number,
		@Query('offset') offset: number,
	): Promise<Track[]> {
		return await this.trackService.getTracks(count, offset);
	}

	@Get('/search')
	public async searchTracks(
		@Query('query') query: string
	): Promise<Track[]> {
		return await this.trackService.searchTracks(query);
	}

	@Get('/:id')
	public async getTrack(
		@Param('id') id: ObjectId
	): Promise<Track> {
		return await this.trackService.getTrack(id);
	}

	@Delete('/:id')
	public async deleteTrack(
		@Param('id') id: ObjectId
	): Promise<ObjectId> {
		return await this.trackService.deleteTrack(id);
	}

	@Post('/comment')
	public async addComment(
		@Body() dto: AddCommentDto
	): Promise<Comment> {
		return await this.trackService.addComment(dto);
	}

	@Post('/listen/:id')
	public async listen(
		@Param('id') id: ObjectId
	): Promise<void> {
		return this.trackService.listen(id);
	}
}
