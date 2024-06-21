import { generateID } from "../utils/id_gen.js";

class User {
  constructor(username = "") {
    this.id = "U_" + generateID();
    this.username = username;
  }

  //----------------------------------

  toPlainObject() {
    return {
      id: this.id,
      username: this.username,
      __class__: "User",
    };
  }

  static fromPlainObject(obj) {
    let user = new User(obj.username);
    user.id = obj.id;

    return user;
  }
}

export default User;
