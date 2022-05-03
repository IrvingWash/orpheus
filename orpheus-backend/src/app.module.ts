import * as path from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://127.0.0.1:27017/orpheus'),
		TrackModule,
		FileModule,
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
		}),
	],
})
export class AppModule {}
