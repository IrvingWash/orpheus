import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://127.0.0.1:27017/orpheus'),
		TrackModule,
		FileModule,
	],
})
export class AppModule {}
