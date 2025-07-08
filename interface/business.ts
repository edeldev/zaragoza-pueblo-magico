export type TCommerceType = {
  name: string;
};

export type TBusines = {
  slug: string;
  name: string;
  commerceType: TCommerceType;
  nameCommerce: string;
  phone?: string;
  service: string;
  schedule?: string;
  ubication: string;
  icon: string;
  ubicationMap: string;
};
