import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://bongoweb:Nick$300^12@cluster0.t4q5myy.mongodb.net/nesttest',
        },
      },
    });
  }
}

// mongodb://USERNAME:PASSWORD@HOST/DATABASE?ssl=true&connectTimeoutMS=5000&maxPoolSize=50
// DATABASE_URL="mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase"
// url: 'mongodb+srv://bongoweb:Nick$300^12@cluster0.t4q5myy.mongodb.net/nesttest',
