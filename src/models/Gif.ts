export interface images {
  fixed_height: {
    url: string;
  };
}

export interface IGIF {
  id?: string;
  title: string;
  url: string;
  images: images;
}

export class GifDTO implements IGIF {
  id?: string;
  title: string = '';
  url: string = '';
  images: images = {
    fixed_height: {
      url: '',
    },
  };
}

export default class Gif extends GifDTO {
  constructor(dto: GifDTO) {
    super();
    Object.assign(this, dto);
  }
}
