import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
	public async addTrack(
		@Body() dto: AddTrackDto
	): Promise<Track> {
		return await this.trackService.addTrack(dto);
	}

	@Get()
	public async getTracks(): Promise<Track[]> {
		return await this.trackService.getTracks();
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
}
