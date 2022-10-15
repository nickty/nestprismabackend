import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'I have sing up' };
  }

  signin() {
    return 'i am sign in';
  }
}
