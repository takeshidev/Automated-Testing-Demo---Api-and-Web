import axios from "axios";
import { Utils } from "../../../utils/utils";
const reqresUrl = "https://reqres.in/api/";

/**
 * API documentation https://reqres.in/
 */
export class MainApiComp {
  public utils = new Utils();

  public async login(email: string, password: string) {
    const body = { email, password };
    const response = await axios.post(reqresUrl + "login", body);
    this.utils.setToken(response.data.token);
    return response;
  }

  public async getUsersList(params?: object) {
    return axios.get(reqresUrl + "users", {
      params,
      headers: {
        Authorization: `Bearer ${await this.utils.getToken()}`,
      },
    });
  }
}
