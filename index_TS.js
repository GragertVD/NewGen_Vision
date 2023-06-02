var _a;
var UserService_TS = /** @class */ (function () {
    function UserService_TS(username, password) {
        this._username = username;
        this._password = password;
    }
    Object.defineProperty(UserService_TS.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserService_TS.prototype, "password", {
        get: function () {
            throw new Error("You are not allowed get password");
        },
        enumerable: false,
        configurable: true
    });
    UserService_TS.authenticate_user = function (user) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https:/examples.com/api/user/authenticate?username=' + user.username + '&password=' + user._password, true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                if (xhr.status >= 400) {
                    reject(xhr.response);
                }
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                resolve(xhr.response);
            };
            xhr.send();
        });
    };
    return UserService_TS;
}());
(_a = document.getElementById("login")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    var inputUsername = document.getElementById("username");
    var inputPassword = document.getElementById("password");
    var user = new UserService_TS(inputUsername.value, inputPassword.value);
    console.log(user);
    UserService_TS.authenticate_user(user)
        .then(function (data) {
        console.log(data);
        // document.location.href = '/home';
    }, function (error) { return console.log(error); });
});
