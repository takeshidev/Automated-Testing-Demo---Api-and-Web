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
