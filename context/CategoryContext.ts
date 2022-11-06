"use client";

import { createContext } from "react";
import Category from "../types/category.type";
import { Dispatch, SetStateAction } from "react";

export const CategoryContext = createContext<ICategoryContext>(null);

type ICategoryContext = {
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
};
