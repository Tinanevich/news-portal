import axios, {AxiosResponse, AxiosRequestConfig} from "axios";
import { INews } from "types/INews";


const getNews = (): Promise<AxiosResponse<INews>> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: {
      q: 'Elon Musk',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '22083bddf3msh9fd4114985a9a97p184aeajsn7c188cf6c47e',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
  };

  return axios.request(options)

}

export default getNews;