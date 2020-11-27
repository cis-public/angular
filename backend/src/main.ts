/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import {AppModule} from './app.module';

import {NestFactory} from '@nestjs/core';

async function bootstrap() {
	
	const app = await NestFactory.create(AppModule);
	
	const port = process.env.port || 3333;
	
	await app.listen(port, () => {
		console.log(`Listening at http://localhost:${port}`);
	});
	
}

bootstrap();
