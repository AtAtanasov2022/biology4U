import jwt_decode from "jwt-decode";

class TokenService {
  getLocalRefreshToken() {
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    return refreshToken;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.accessToken;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  setUser(user) {
    localStorage.setItem("token", JSON.stringify(user.token));
    localStorage.setItem("user", JSON.stringify(jwt_decode(user.token)));
    localStorage.setItem("refreshToken", JSON.stringify(user.refreshToken));
  }

  removeUser() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }
}

export default new TokenService();