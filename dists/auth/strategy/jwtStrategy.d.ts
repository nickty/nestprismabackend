import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
declare const JwtStragery_base: new (...args: any[]) => Strategy;
export declare class JwtStragery extends JwtStragery_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: any;
        email: string;
    }): Promise<import(".prisma/client").User>;
}
export {};
