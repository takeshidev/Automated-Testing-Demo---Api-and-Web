import { expect } from "@wdio/globals";
import { MainOperations } from "../business-operations/api/main.operations";

const mainApiOperations = new MainOperations();

describe("API testing", () => {
  let response;

  beforeEach(async () => {
    response = null;
  });

  it("[API-001] Login succesfully", async () => {
    response = await mainApiOperations.login("eve.holt@reqres.in", "12345");
    await expect(response!.status).toBe(200);
  });

  it("[API-002] Get user list using 'page' parameter", async () => {
    response = await mainApiOperations.login("lindsay.ferguson@reqres.in", "12345");
    await expect(response!.status).toBe(200);

    response = await mainApiOperations.getUsersList({ page: "2" });
    await expect(response!.status).toBe(200);
    await expect(response!.data.page).toBe(2);
  });
});
