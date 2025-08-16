import allureReporter from "@wdio/allure-reporter";
import { Status } from "allure-js-commons";

export class Utils {
  public setToken(token: string) {
    // @ts-ignore
    browser.sharedStore.set("token", token);
  }
  public getToken() {
    // @ts-ignore
    return browser.sharedStore.get("token");
  }
}

export async function step(name: string, fn: () => Promise<any> | any) {
  allureReporter.startStep(name);
  try {
    const result = await fn();
    allureReporter.endStep(Status.PASSED);
    return result;
  } catch (error) {
    allureReporter.endStep(Status.FAILED);
    throw error;
  }
}
