import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login({ username, userPassword }) {
    return api
      .post("/users/logIn", {
        username,
        userPassword
      })
      .then((response) => {
        if (response.data.token) {
          TokenService.setUser(response.data);
        }

        return response;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(userInfo) {
    return api.post("/users", userInfo).then((response) => {
      if (response.data.token) {
        TokenService.setUser(response.data);
        return response
      }
    });
  }
}

export default new AuthService();