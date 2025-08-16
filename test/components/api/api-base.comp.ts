import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import apiData from "../../resources/test-data/api-data.json";

export class ApiBaseComp {
  baseUrl: string;
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({});
    this.baseUrl = apiData.baseUrl;
    this.axiosInstance.defaults.headers.common["x-api-key"] = "reqres-free-v1"; // This should be stored in a secrets manager or in a .env file
  }

  public async get(path: string, headers?: AxiosRequestConfig<any>): Promise<AxiosResponse<any>> {
    return this.axiosInstance.get(`${this.baseUrl}${path}`, headers);
  }

  public async post(path: string, body: object, headers?: AxiosRequestConfig<any>): Promise<AxiosResponse<any>> {
    return this.axiosInstance.post(`${this.baseUrl}${path}`, body, headers);
  }

  public async put(path: string, body: object, headers?: AxiosRequestConfig<any>): Promise<AxiosResponse<any>> {
    return this.axiosInstance.put(`${this.baseUrl}${path}`, body, headers);
  }

  public async patch(path: string, body: object, headers?: AxiosRequestConfig<any>): Promise<AxiosResponse<any>> {
    return this.axiosInstance.patch(`${this.baseUrl}${path}`, body, headers);
  }

  public async delete(path: string, headers?: AxiosRequestConfig<any>): Promise<AxiosResponse<any>> {
    return this.axiosInstance.delete(`${this.baseUrl}${path}`, headers);
  }
}
