import Template from "./template.type";
import User from "./user.type";

export default interface Review {
  id: number;
  text: string;
  template: Template;
  stars: number;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export const parseReview = () => {};
