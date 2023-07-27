import axios from "axios";
import jwtDecode from "jwt-decode";

export class AuthService {
    static async login(username: string, password: string) {
        const response = await axios.post("/api/login", {
            username,
            password,
        });
        localStorage.setItem("token", response.data.token);
    }

    static logout() {
        localStorage.removeItem("token");
    }

    static isAuthenticated() {
        const token = localStorage.getItem("token");
        const decodedToken: { exp: number } = token
            ? jwtDecode(token)
            : { exp: 0 };

        return token && decodedToken.exp * 1000 > new Date().getTime();
    }
}
