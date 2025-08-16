import { usersApiComp } from "../../components/api/usersComp";

export class UsersOperations {
  public async getUsersList(params?: object) {
    const config = await usersApiComp.setRequestConfig(params);
    return usersApiComp.get("login", config);
  }
  public async getUser(id: string, params?: object) {
    const config = await usersApiComp.setRequestConfig(params);
    return usersApiComp.get("login/" + id, config);
  }

  public async getIdFromUsersList(response: any, index: number = 0) {
    return response.data.data[index].id;
  }
}
