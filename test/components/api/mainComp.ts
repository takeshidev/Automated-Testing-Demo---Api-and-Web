const axios = require("axios");

/**
 * API documentation https://pokeapi.co/docs/v2
 */
export class MainApiComp {
  public getPokemon(name: string) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  public getMoveDetails(name: string) {
    return axios.get(`https://pokeapi.co/api/v2/move/${name}`);
  }
}
