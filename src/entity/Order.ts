export type Order = {
  id: number;
  attributes: {
    Address: string;
    City: string;
    Postal_Code: string;
    IsCheckout: boolean;
    createdAt: string | null;
    updatedAt: string | null;
    publishedAt: string | null;
    order_details: any;
  };
};
