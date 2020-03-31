import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
	const nest = await NestFactory.create(AppModule);
	const configService = nest.get('ConfigService');
	const tcp = configService.get('tcp');
	const app = configService.get('app');
	nest.connectMicroservice(tcp);
	await nest.startAllMicroservicesAsync();
	await nest.listen(app.port, () => 'Microservice is listening');
})();
