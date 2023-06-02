class UserService_TS {

  readonly _username: string;
  readonly _password: string;

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
  }

  get username() {
    return this._username;
  }

  get password() {
    throw new Error("You are not allowed get password");
  }

  static authenticate_user(user: UserService_TS) {
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

document.getElementById("login")?.addEventListener("click", (e) => {
  e.preventDefault();

  const inputUsername = document.getElementById("username");
  const inputPassword = document.getElementById("password");

  const user = new UserService_TS((inputUsername as HTMLInputElement).value, (inputPassword as HTMLInputElement).value);

  UserService_TS.authenticate_user(user)
    .then(
      data => {
        console.log(data);
        document.location.href = '/home';
      },
      error => console.log(error)
    )

});