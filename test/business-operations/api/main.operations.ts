import { MainApiComp } from "../../components/api/mainComp";

export class MainOperations {
  private mainApiComp = new MainApiComp();

  public testRequest() {
    try {
      return this.mainApiComp.testRequest();
    } catch (error) {
      console.error("Error in MainOperations.testRequest():", error);
    }
  }
}
