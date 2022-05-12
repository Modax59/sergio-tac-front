export type Category = {
  id: number;
  attributes: {
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
    publishedAt: string | null;
  };
};
