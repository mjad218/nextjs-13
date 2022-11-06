import Tag from "./tag.type";
import Template from "./template.type";

export default interface Category {
  id: number;
  slug: string;
  title: string;
  icon: string;
  description: string;
  numberOfTemplates: number;
  dateAdded: string;
  templates?: Template[];
  tags?: Tag[];
}

export const parseCategory = () => {};
