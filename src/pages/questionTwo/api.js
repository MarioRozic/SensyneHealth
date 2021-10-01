import axios from "axios";

async function getCardDetails() {
  return axios.get("http://localhost:3001/example");
}

export { getCardDetails };
