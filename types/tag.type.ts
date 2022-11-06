import Category from "./category.type";
import Template from "./template.type";

export default interface Tag {
  id: number;
  slug: string;
  title: string;
  icon: string;
  description: string;
  numberOfTemplates: number;
  dateAdded: string;
  templates: Template[];
  category: Category;
  plural?: string;
  singular?: string;
}

export const parseTag = () => {};
