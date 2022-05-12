export type OrderDetail = {
  id: number;
  attributes: {
    Quantity: number;
    Price: number;
    TotalPrice: number;
    createdAt: string | null;
    updatedAt: string | null;
    publishedAt: string | null;
    order: any;
    product: any;
  };
};
