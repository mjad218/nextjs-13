const serializeTags = (tags): TagOption[] => {
  if (!tags) {
    return [];
  }
  return tags?.map((tag) => {
    return { value: +tag.id, label: tag.title };
  });
};

const serializeCategories = (categories): CatOption[] => {
  if (!categories) {
    return [];
  }
  return categories.map((cat) => {
    return { value: +cat.id, label: cat.title };
  });
};

type TagOption = {
  value: number | string;
  label: string;
};
type CatOption = {
  value: number | string;
  label: string;
};

export { serializeCategories, serializeTags };
export type { TagOption, CatOption };
