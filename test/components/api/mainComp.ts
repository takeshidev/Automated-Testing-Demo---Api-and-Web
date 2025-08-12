import axios from "axios";
import { Utils } from "../../../utils/utils";
const reqresUrl = "https://reqres.in/api/";

/**
 * API documentation https://reqres.in/
 */
export class MainApiComp {
  public utils = new Utils();

  public async login(email: string, password: string) {
    const config = {
      headers: {
        "x-api-key": "reqres-free-v1", // this value should be stored in a secrets manager or in a .env file
      },
    };
    const body = { email, password };
    const response = await axios.post(reqresUrl + "login", body, config);
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
