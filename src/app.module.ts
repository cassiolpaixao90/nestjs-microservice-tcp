import { Global, Module } from '@nestjs/common';
import { InfraModule } from 'src/server/infraestructure/infra.module';

const APP_MODULES = [InfraModule];
@Global()
@Module({
	providers: [...APP_MODULES],
	imports: [...APP_MODULES],
	exports: [...APP_MODULES]
})
export class AppModule {}
