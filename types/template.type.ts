import Category from "./category.type";
import Review from "./review.type";
import Tag from "./tag.type";
import User from "./user.type";

export default interface Template {
  id?: number;
  approved?: boolean;
  title: string;
  thumbnail: string;
  createdAt?: string;
  content?: string;
  developerId?: number;
  purchases?: number;
  previewLink: string;
  price: number;
  stars?: number;
  versions?: string[];
  slogan?: string;
  description?: string;
  slug: string;
  updatedAt?: string;
  categoryId?: number;
  category?: Category;
  developer?: User;
  reviews?: Review[];
  tags?: Tag[];
  downloadFileName?: string;
  favId?: number | string;
  templateFile?: "";
  bestReview?: number;
  worstReview?: number;
  reviewCount?: number;
}

export const parseTemplate = () => {};
