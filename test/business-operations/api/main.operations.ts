import { MainApiComp } from "../../components/api/mainComp";

export class MainOperations {
  private mainApiComp = new MainApiComp();

  public getPokemon(name: string) {
    try {
      return this.mainApiComp.getPokemon(name);
    } catch (error) {
      console.error("Error in MainOperations.getPokemon():", error);
    }
  }
  public getMoveDetails(name: string) {
    try {
      return this.mainApiComp.getMoveDetails(name);
    } catch (error) {
      console.error("Error in MainOperations.getMoveDetails():", error);
    }
  }
}
