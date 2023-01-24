import jwt_decode from "jwt-decode";

class TokenService {
  getLocalRefreshToken() {
    const refreshToken = localStorage.getItem("refreshToken");
    return refreshToken;
  }

  getLocalAccessToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  updateLocalAccessToken(token) {
    let userToken = localStorage.getItem("token");
    userToken = token;
    localStorage.setItem("token", JSON.stringify(userToken));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  setUser(user) {
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(jwt_decode(user.token)));
    localStorage.setItem("refreshToken", user.refreshToken);
  }

  removeUser() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }
}

export default new TokenService();