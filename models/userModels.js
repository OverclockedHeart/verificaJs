import { generateID } from "../utils/id_gen.js";

class User {
  constructor(username = "", password = "", email = "", desc = "") {
    this.id = "U_" + generateID();
    this.username = username;
    this.email = email;
    this.password = password;
    this.desc = desc;
  }

  //----------------------------------

  toPlainObject() {
    return {
      id: this.id,
      username: this.username,
      password: this.password,
      email: this.email,
      desc: this.desc,
      __class__: "User",
    };
  }

  static fromPlainObject(obj) {
    let user = new User(obj.username, obj.password, obj.email, obj.desc);
    user.id = obj.id;

    return user;
  }
}

export default User;
