"use client";
import dynamic from "next/dynamic";
import { FC } from "react";
import { CatOption, serializeCategories } from "../../helpers";
import Category from "../../types/category.type";

let ReactSelect = dynamic(
  () => import("../ReactSelect").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export const getSelectedCategory = (id: number, categories: Category[]) => {
  if (!id) {
    return null;
  }
  let selectedCategory = categories?.find((cat) => cat.id == id);
  return selectedCategory;
};

type IProps = {
  category: Category;
  categories: Category[];
  onChange: (Category) => void;
};
const CategorySelect: FC<IProps> = (props) => {
  const category = props.category;
  const categories = props.categories;
  const onChange = props.onChange;
  const catOptions: CatOption[] = serializeCategories(categories);
  return (
    <>
      {ReactSelect && (
        <ReactSelect
          placeholder="القسم"
          noOptionsMessage={"لا توجد اقسام"}
          value={
            category?.id
              ? {
                  value: category?.id,
                  label: category?.title,
                }
              : null
          }
          defaultValue={
            category?.id
              ? {
                  value: category?.id,
                  label: category?.title,
                }
              : null
          }
          onChange={(option: CatOption) => {
            const category = getSelectedCategory(+option.value, categories);
            onChange(category);
          }}
          options={catOptions}
        />
      )}
    </>
  );
};

export default CategorySelect;
