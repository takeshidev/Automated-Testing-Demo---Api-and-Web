const axios = require("axios");

export class MainApiComp {
  public testRequest() {
    return axios.get("https://pokeapi.co/api/v2/pokemon/charizard");
  }
}
