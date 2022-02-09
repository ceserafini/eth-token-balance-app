import { User } from "../../models/user.model";

class UserState  {
  constructor(
    public user: User = {} as User,
  ){  }
}

export default UserState;