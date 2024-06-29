import { MainApiComp } from "../../components/api/mainComp";
export class MainOperations {
  private mainApiComp = new MainApiComp();
  public async login(email: string, password: string) {
    try {
      return this.mainApiComp.login(email, password);
    } catch (error) {
      console.error("Error in MainOperations.login():", error);
    }
  }
  public getUsersList(params?: any) {
    try {
      return this.mainApiComp.getUsersList(params);
    } catch (error) {
      console.error("Error in MainOperations.getUsersList():", error);
    }
  }
}
