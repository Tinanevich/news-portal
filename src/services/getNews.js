import axios from "axios";

const getNews = () => {
    const options = {
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search',
        params: {
          q: 'Elon Musk',
          lang: 'en',
          sort_by: 'relevancy',
          page: '1',
          media: 'True'
        },
        headers: {
          'X-RapidAPI-Key': 'b4decc383emsh1150d9338b5faecp1d23b3jsn1a2fb1373d44',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
    };

    return axios.request(options)

}

export default getNews;