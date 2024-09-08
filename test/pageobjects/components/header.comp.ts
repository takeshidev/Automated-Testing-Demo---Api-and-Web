import { $ } from "@wdio/globals";

class HeaderComp {
  public get cart() {
    return $(".nav-item=Cart");
  }
}

export default new HeaderComp();
