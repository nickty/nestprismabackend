import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    editUser(userId: string, dto: EditUserDto): Promise<import(".prisma/client").User>;
}
