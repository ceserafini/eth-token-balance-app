import axios, { AxiosError, AxiosResponse } from "axios";
import { MarketPriceDTO } from "./dto/market-price-dto";

const URL_BASE = "https://api.bittrex.com/v3";

axios.defaults.baseURL = URL_BASE;
axios.defaults.headers.common['Access-Control-Request-Headers'] = null
axios.defaults.headers.common['Access-Control-Request-Method'] = null

export const getMarketPrice = async (symbol: string): Promise<MarketPriceDTO> => {

  const uri = `/markets/${symbol}-USD/ticker`;

  return await axios.get(uri, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response: AxiosResponse) => {
      return response.data;

    })
    .catch((error: AxiosError) => {
      throw new Error(`${error.response?.data.message}`);
    });

  }
