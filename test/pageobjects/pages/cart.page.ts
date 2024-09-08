import { $ } from "@wdio/globals";
import Page from "./page";
import PlaceOrderModal from "../modals/placeOrder.modal";

const placeOrderModal = PlaceOrderModal;

class CartPage extends Page {
  public get placeOrder() {
    return $(".btn-success=Place Order");
  }

  public get placeOrderModal() {
    return placeOrderModal;
  }

  public get item() {
    return $$(".success");
  }

  public getItemTitle(item: number) {
    return this.item[item].$("td:nth-child(2)");
  }

  public getItemPrice(item: number) {
    return this.item[item].$("td:nth-child(3)");
  }

  public get totalPrice() {
    return $("#totalp");
  }
}

export default new CartPage();
