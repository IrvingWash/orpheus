import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function start(): Promise<void> {
	try {
		const port = process.env.PORT || 3333;

		const app = await NestFactory.create(AppModule);

		app.enableCors();

		await app.listen(port, () => console.log(`Server started on port ${port}`));
	} catch(error) {
		console.log(error);
	}
}

start();
