/* eslint-disable camelcase */

import Axios from 'axios';
import store from '../store';

interface RequestInterface {
  data: any[];
}

export default function GifsApi(search: string, offset?: number): void {
  const GifsAxios = Axios.create();
  GifsAxios.get<RequestInterface>('https://api.giphy.com/v1/gifs/search', {
    params: { api_key: 'YslmuhMztVsKV6o4Bhfgj86lz0NUteUr', q: search, offset },
  }).then((Response) => {
    console.log(Response.data.data);
    Response.data.data.map((GifDto) => store.dispatch('addGif', GifDto));
  });
}
