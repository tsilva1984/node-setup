import { User } from '@models/User'

export class UserController {
  teste () {
    const user = new User()
    console.log(user)
    console.log(process.env.teste)
  }
}
