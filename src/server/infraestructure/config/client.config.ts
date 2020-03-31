import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export default registerAs('client', () => ({
	transport: Transport.TCP,
	options: {
		port: 5667
	}
}));
