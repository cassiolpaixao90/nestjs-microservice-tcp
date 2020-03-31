import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import clientConfig from 'src/server/infraestructure/config/client.config';

const ENV = process.env.NODE_ENV;

const CONFIG_MODULES = [
	ConfigModule.forRoot({
		load: [clientConfig],
		envFilePath: path.resolve(process.cwd(), 'env', !ENV ? '.env' : `.env.${ENV}`)
	})
];

@Global()
@Module({
	exports: [...CONFIG_MODULES],
	imports: [...CONFIG_MODULES],
	providers: []
})
export class InfraModule {}
