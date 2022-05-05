export type ProductType = {
  id: number;
  attributes: {
    Title: string;
    Content: string;
    Price: number;
    Size: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Thumbnails: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: any;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string;
          provider: string;
          provider_metadata: any;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
  Pictures: { data: string[] };
  Categories: {
    data: string[];
  };
};
