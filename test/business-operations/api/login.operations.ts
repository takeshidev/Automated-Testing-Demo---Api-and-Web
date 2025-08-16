import { loginApiComp } from "../../components/api/loginComp";

export class LoginOperations {
  public async postLogin(email: string, password: string) {
    return await loginApiComp.post("login", { email, password });
  }
}
