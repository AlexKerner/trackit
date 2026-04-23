export type Package = {
  id: string;
  code: string;
  nickname?: string;

  status: "delivered" | "in_transit" | "out_for_delivery";

  description: string;
  location: string;
  date: string;
};