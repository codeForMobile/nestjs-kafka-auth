import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users:any[] = [
    {
      userId: '123', 
      stripeUserId: '4321'
    },
    {
      userId: '345', 
      stripeUserId: '6789'
    }
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    console.log(`user from auth service ${getUserRequest.userId}`)
    return this.users.find((user) =>  user.userId === getUserRequest.userId)
  }
}
