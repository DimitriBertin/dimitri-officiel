export type ContentProps = {
  data: {
    type: string;
    components: string;
    content?: string,
    background?: string;
    align?: string;
    textcolor?: string;
  }
}

type Image = {
  url: string;
  caption?: string;
  alt: string;
  width?: number;
  height?: number;
  type?: string;
  sizes: {
    [key: string]: {
      width: number;
      height: number;
      url: string;
    };
  };
}

export type ImageProps = {
  data: {
    type: string;
    components: string;
    background?: string;
    size?: string;
    textcolor?: string;
    image?: Image;
  }
}

export type VideoProps = {
  data: {
    type: string;
    components: string;
    background?: string;
    textcolor?: string; 
    video?: {
      url: string;
      caption?: string;
      help?: string;
      poster?: string;
    }
  }
}


export type ImagesProps = {
  data: {
    type: string;
    size?: string;
    components: string;
    background?: string;
    textcolor?: string;
    images?: Image[];
  }
}