import { ApiBaseComp } from "./api-base.comp";
import { Utils } from "../../../utils/utils";
import { AxiosRequestConfig } from "axios";

/**
 * API documentation https://reqres.in/
 */
export class LoginApiComp extends ApiBaseComp {
  public utils = new Utils();

  public async setRequestConfig(params?: any): Promise<AxiosRequestConfig> {
    const config: AxiosRequestConfig = {
      params: params ? params : undefined,
    };
    return config;
  }
}

export const loginApiComp = new LoginApiComp();
