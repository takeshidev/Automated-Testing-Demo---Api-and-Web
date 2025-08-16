import { expect } from "@wdio/globals";
import { step } from "../../utils/utils";
import { LoginOperations } from "../business-operations/api/login.operations";
import { UsersOperations } from "../business-operations/api/users.operations";

const login = new LoginOperations();
const users = new UsersOperations();

describe("[API testing] reqres.in", () => {
  let response: any;

  beforeEach(async () => {
    response = null;
  });

  it("[API-001] Login successfully", async () => {
    await step("Login", async () => (response = await login.postLogin("eve.holt@reqres.in", "12345")));
    await step("Verify status code is 200", async () => await expect(response!.status).toBe(200));
  });

  it("[API-002] Get user list using 'page' parameter", async () => {
    await step("Get user list with page param", async () => (response = await users.getUsersList({ page: "2" })));

    await step("Verify status code is 200", async () => await expect(response!.status).toBe(200));
    await step("Verify pagination", async () => await expect(response!.data.page).toBe(2));
  });

  it("[API-003] Get user by Id", async () => {
    let userId: string;
    await step("Pre-condition: Get the ID of the first user from the list", async () => {
      const userListResponse = await users.getUsersList();
      userId = userListResponse.data.data[0].id;
      expect(userId).toBeDefined();
    });
    await step("Get user by Id", async () => (response = await users.getUser(userId)));
    await step("Verify status code is 200", async () => await expect(response!.status).toBe(200));
  });
});
