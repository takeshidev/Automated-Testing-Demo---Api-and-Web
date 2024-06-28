import { expect } from "@wdio/globals";
import { MainOperations } from "../business-operations/api/main.operations";

let mainApiOperations = new MainOperations();

describe("API testing - Pokemon", () => {
  it("[TK-001]Get pokemon by its name", async function () {
    let response = await mainApiOperations.getPokemon("charizard");
    await expect(response.status).toBe(200);
  });
});
