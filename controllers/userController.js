import User from "../models/UserModel.js";

class UsersList {
  #users;
  userLogged;

  constructor() {
    this.#users = [];
    this.userLogged = null;
  }

  //-----------------------------

  login(username, password) {
    let user = this.#users.find((u) => u.username === username);
    console.log(user);

    if (!user) {
      //non trova username
      window.alert("Error: wrong credentials.");
    } else if (!dcodeIO.bcrypt.compareSync(password, user.password)) {
      //la password e l'hash non combaciano
      window.alert("Error: wrong password.");
    } else {
      window.alert("Login successful!");
      this.userLogged = user;
    }
  }

  signup(username, password, email, desc) {
    let user = new User();

    if (this.#users.find((u) => u.username === username) != undefined)
      window.alert(
        "Error: user already exists, please choose a different username."
      );
    else {
      const salt = dcodeIO.bcrypt.genSaltSync(5);
      user.password = dcodeIO.bcrypt.hashSync(password, salt);

      user.username = username;
      user.email = email;
      user.desc = desc;

      this.#users.push(user);
    }
  }

  editDesc(newDesc) {
    let userToEdit = this.#users.find((user) => user === this.userLogged);
    let index = this.#users.indexOf(userToEdit);

    userToEdit.desc = newDesc;
    this.#users[index] = userToEdit;
  }

  logout() {
    this.userLogged = null;
    console.log("Logout succcessful.");
  }

  //----------------------------------

  getUserByID(id) {
    let userbyID = this.#users.find((user) => {
      id === user.id;
    });
    return userbyID;
  }

  //----------------------------------

  toPlainObject() {
    let checkedUser = this.userLogged;
    if (checkedUser !== null) checkedUser = this.userLogged.toPlainObject();

    return {
      users: this.#users.map((user) => user.toPlainObject()),
      userLogged: checkedUser,
      __class__: "UsersList",
    };
  }

  static fromPlainObject(obj) {
    let list = new UsersList();
    let checkedUser = obj.userLogged;

    if (checkedUser !== null) checkedUser = User.fromPlainObject(checkedUser);
    list.userLogged = checkedUser;

    list.#users = obj.users.map((userObj) => User.fromPlainObject(userObj));
    return list;
  }
}

export default UsersList;
