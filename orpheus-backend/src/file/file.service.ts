import * as path from 'path';
import * as fs from 'fs';

import {
	HttpException,
	HttpStatus,
	Injectable,
} from '@nestjs/common';

import * as uuid from 'uuid';

export const enum FileType {
	Audio = 'audio',
	Picture = 'picture',
}

@Injectable()
export class FileService {
	public addFile(type: FileType, file: Express.Multer.File): string {
		try {
			const fileExtension = file.originalname.split('.').pop();
			const fileName = `${uuid.v4()}.${fileExtension}`;

			const filePath = path.resolve(__dirname, '..', 'static', type);

			if (!fs.existsSync(filePath)) {
				fs.mkdirSync(filePath, { recursive: true });
			}

			fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);

			return `${type}/${fileName}`;
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public deleteFile(): void {
		return;
	}
}
