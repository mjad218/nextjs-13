"use client";

import { FC, useEffect, useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import TwoColumn from "../../layout/TwoColumn/TwoColumn";
import { getCats } from "../../services";
import { getTemplates } from "../../services/template/getTemplates.service";
import Category from "../../types/category.type";
import Template from "../../types/template.type";
import ListTemplates from "../ListTemplates";
import SearchAside from "./SearchAside";
import InitialQuery from "./SearchAside/initial";
import styles from "./SearchTemplates.module.css";
type IProps = {
  templates: Template[];
};

export type IQuery = {
  category?: number;
  tags?: number[];
  priceRange?: [number, number];
  keyword?: string;
  page?: number;
  stars?: number;
};
const SearchTemplates: FC<IProps> = (props) => {
  const [query, setQuery] = useState<IQuery>(InitialQuery);
  const [page, setPage] = useState(0);
  const [categories, setCategories] = useState<Category[]>(null);

  const [templates, setTemplates] = useState(props.templates);
  const getData = async () => {
    try {
      const categories = await getCats();
      setCategories(categories);
    } catch (e) {}
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = async () => {
    try {
      const templates = await getTemplates(
        0,
        query?.keyword,
        query?.category,
        query?.tags,
        query?.priceRange,
        query?.stars
      );
      setTemplates((prev) => {
        return [...templates];
      });
      setPage(0);
    } catch (e) {
      console.error(e);
    }
  };

  const handleShowMore = async () => {
    try {
      const templates = await getTemplates(
        page + 1,
        query?.keyword,
        query?.category,
        query?.tags,
        query?.priceRange,
        query?.stars
      );
      setTemplates((prev) => {
        return [...prev, ...templates];
      });
      setPage(page + 1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      <div className="container">
        <div className="row">
          <TwoColumn
            rightTakes={300}
            right={
              <SearchAside
                setQuery={setQuery}
                handleSearch={handleSearch}
                query={query}
              />
            }
            left={
              <>
                <ListTemplates templates={templates} />
                <div className={styles.actions}>
                  <button onClick={handleShowMore}>المزيد</button>
                </div>
              </>
            }
          />{" "}
        </div>
      </div>
    </CategoryContext.Provider>
  );
};

export default SearchTemplates;
