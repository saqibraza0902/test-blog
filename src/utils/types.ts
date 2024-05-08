export interface IUser {
  avatar: string;
  description: string;
  email: string;
  id: string;
  isAdmin: boolean;
  isAuther: boolean;
  name: string;
}
export interface IBlog {
  id: string;
  slug: string;
  title: string;
  desc: string;
  content: string;
  tags: string[];
  featuredImage: {
    url: string;
    alt: string;
  };
  isArchived: boolean;
  autherId: string;
  isFeatured?: boolean;
  createdAt: {
    seconds: number;
    nenoseconds: number;
  };
  updatedAt: {
    seconds: number;
    nenoseconds: number;
  };
}

export type IPortfolio = {
  id: string;
  slug: string;
  title: string;
  desc: string;
  content: string;
  tags: string[];
  gallery: any[];
  client: {
    name: string;
    country: string;
    isIndividual: boolean;
  };
  isArchived: boolean;
  timeline: {
    start: string;
    end: string;
  };
  autherId: string;
  createdAt: {
    seconds: number;
    nenoseconds: number;
  };
  updatedAt: {
    seconds: number;
    nenoseconds: number;
  };
};
