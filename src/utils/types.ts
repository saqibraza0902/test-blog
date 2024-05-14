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

export interface ICollectible {
  id: string;
  title: string;
  type: string;
  subtype: string;
  price: number;
  image: string;
  downloadUrl: string;
  content: string;
}
export interface IHeroSection {
  text1: string;
  text2: string;
  text3: string;
}
export interface IServices {
  title: string;
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
}
export interface IRating {
  title: string;
  ratings: {
    clientName: string;
    clientDescription: string;
    clientImage: string;
    review: string;
    rating: number;
  }[];
}
export interface IWork {
  title: string;
}
export interface IPartners {
  title: string;
  partners: {
    image: string;
    text: string;
  }[];
}
export interface IBlogSection {
  title: string;
  description: string;
}
export interface IHome {
  HeroSection: IHeroSection;
  ScrollText: string;
  ServicesPage: IServices;
  RatingSection: IRating;
  WorksSection: IWork;
  PartnersSection: IPartners;
  BlogSection: IBlogSection;
}

export interface IContact {
  title: string;
  contact: {
    title: string;
    description: string;
  }[];
}
