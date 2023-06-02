class UserService {

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get username() {
    return this._username;
  }

  set username(name) {
    this._username = name;
  }

  get password() {
    throw new Error("You are not allowed get password");
  }

  set password(pas) {
    this._password = pas;
  }

  static authenticate_user(user) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', 'https:/examples.com/api/user/authenticate?username=' + user.username + '&password=' + user._password, true);
      xhr.responseType = 'json';

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        }
        resolve(xhr.response);
      }

      xhr.onerror = () => {
        resolve(xhr.response);
      }

      xhr.send();
    })
  }
}

document.getElementById("login").addEventListener("click", (e) => {
  e.preventDefault();

  const inputUsername = document.getElementById("username");
  const inputPassword = document.getElementById("password");

  const user = new UserService(inputUsername.value, inputPassword.value);

  UserService.authenticate_user(user)
    .then(
      data => {
        console.log(data);
        document.location.href = '/home';
      },
      error => console.log(error)
    )

});