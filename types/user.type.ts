import Template from "./template.type";

export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  isDeveloper: boolean;
  avatar: string;
  about: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  templates: Template[];
}

export const parseUser = () => {};
