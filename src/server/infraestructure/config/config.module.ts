import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import clientConfig from './client.config';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [clientConfig]
		})
	]
})
export class EnvModule {}
