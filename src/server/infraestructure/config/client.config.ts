import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export const clientConfig = registerAs('tcp', () => ({
	transport: Transport.TCP,
	options: {
		port: process.env.TCP_PORT
	}
}));
