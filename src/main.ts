import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenvFlow = require('dotenv-flow');

(async () => {
	dotenvFlow.config();
	const app = await NestFactory.create(AppModule);
	const configService = app.get('ConfigService');
	const client = configService.get('client');
	app.connectMicroservice(client);
	await app.startAllMicroservicesAsync();
	await app.listen(3000, () => 'Microservice is listening');
})();
