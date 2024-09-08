import { $ } from "@wdio/globals";

class PlaceOrderModal {
  public get name() {
    return $("#name");
  }

  public get country() {
    return $("#country");
  }

  public get city() {
    return $("#city");
  }

  public get card() {
    return $("#card");
  }

  public get month() {
    return $("#month");
  }

  public get year() {
    return $("#year");
  }

  public get purchase() {
    return $(".btn-primary=Purchase");
  }

  public get successMessage() {
    return $(".sweet-alert h2");
  }

  public get ok() {
    return $(".sa-confirm-button-container button");
  }
}

export default new PlaceOrderModal();
