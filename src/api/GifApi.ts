/* eslint-disable camelcase */

import Axios from 'axios';
import store from '../store';
import Gif from '@/models/Gif';

interface RequestInterface {
  data: Gif[];
}

export default function GifsApi(): void {
  const GifsAxios = Axios.create();
  if (store.state.searchCount === 0) {
    store.dispatch('resetGifState');
  }
  GifsAxios.get<RequestInterface>('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: 'YslmuhMztVsKV6o4Bhfgj86lz0NUteUr',
      q: store.state.search,
      limit: 25,
      offset: store.state.searchCount,
    },
  }).then((Response) => {
    Response.data.data.map((GifDto) => store.dispatch('addGif', GifDto));
  });
}
