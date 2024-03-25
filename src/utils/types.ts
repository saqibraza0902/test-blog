interface IUser {
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
  createdAt: string;
  updatedAt: string;
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
  createdAt: string;
  updatedAt: string;
};
