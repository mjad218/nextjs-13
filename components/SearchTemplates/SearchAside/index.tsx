import { FC, FormEvent, useContext, useEffect, useState } from "react";
import { IQuery } from "..";
import styles from "./SearchAside.module.css";
import { Dispatch, SetStateAction } from "react";
import { CategoryContext } from "../../../context/CategoryContext";
import CategorySelect, { getSelectedCategory } from "../../CategorySelect";
import TagSelect from "../../TagSelect";
import Category from "../../../types/category.type";
import Rating from "../../Rating";

type IProps = {
  query: IQuery;
  setQuery: Dispatch<SetStateAction<IQuery>>;
  handleSearch: () => void;
};

const SearchAside: FC<IProps> = (props) => {
  const query = props.query;
  const setQuery = props.setQuery;

  let { categories } = useContext(CategoryContext);
  categories = categories?.slice(0, 50);
  const handleSearch = props.handleSearch;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch();
  };
  return (
    <aside className={styles.aside}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="keyword">بحث عن</label>
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="أبحث عن..."
            value={query?.keyword}
            onChange={(e) =>
              setQuery((prev) => {
                return {
                  ...prev,
                  keyword: e.target.value,
                };
              })
            }
          />
        </div>
        <div>
          <p>السعر</p>
          <div className={styles.price}>
            <div>
              <label htmlFor="from">من</label>
              <input
                type="number"
                name="from"
                id="from"
                placeholder="5$"
                // min={5}
                value={query?.priceRange ? query?.priceRange[0] : 5}
                onChange={(e) =>
                  setQuery((prev) => {
                    return {
                      ...prev,
                      priceRange: [
                        +e.target.value,
                        prev?.priceRange ? prev?.priceRange[1] : 0,
                      ],
                    };
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="to">إلي</label>

              <input
                max={10000}
                min={5}
                type="number"
                name="to"
                id="to"
                placeholder="5$"
                value={query?.priceRange ? query?.priceRange[1] : 5}
                onChange={(e) =>
                  setQuery((prev) => {
                    return {
                      ...prev,
                      priceRange: [
                        prev?.priceRange ? prev?.priceRange[0] : 0,
                        +e.target.value,
                      ],
                    };
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <p>
            القسم
            <button
              onClick={() =>
                setQuery((prev) => {
                  return {
                    ...prev,
                    category: null,
                  };
                })
              }
            >
              تفريغ
            </button>
          </p>
          <CategorySelect
            categories={categories}
            category={getSelectedCategory(query?.category, categories)}
            onChange={(category) =>
              setQuery((prev) => {
                return {
                  ...prev,
                  category: category.id,
                };
              })
            }
          />
        </div>
        <div className={styles.tags}>
          <p>
            التصنيفات
            <button
              onClick={() =>
                setQuery((prev) => {
                  return {
                    ...prev,
                    tags: null,
                  };
                })
              }
            >
              تفريغ
            </button>
          </p>
          <TagSelect
            tags={getSelectedCategory(query?.category, categories)?.tags?.slice(
              0,
              50
            )}
            selectedTags={getSelectedCategory(
              query?.category,
              categories
            )?.tags?.filter((tag) => query?.tags?.some((t) => t == tag.id))}
            onChange={(tags) =>
              setQuery((prev) => {
                return {
                  ...prev,
                  tags: tags?.map((tag) => +tag.id),
                };
              })
            }
          />
        </div>
        <div>
          <p>
            التقييم
            <button
              onClick={() =>
                setQuery((prev) => {
                  return {
                    ...prev,
                    stars: 0,
                  };
                })
              }
            >
              تفريغ
            </button>
          </p>
          <Rating
            stars={query?.stars}
            setStars={(stars) =>
              setQuery((prev) => {
                return {
                  ...prev,
                  stars,
                };
              })
            }
          />
        </div>
        <input type="submit" value="بحث" />
      </form>
    </aside>
  );
};

export default SearchAside;
