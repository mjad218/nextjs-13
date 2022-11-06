"use client";
import dynamic from "next/dynamic";
import { FC } from "react";
import { serializeTags, TagOption } from "../../helpers";
import Tag from "../../types/tag.type";

let ReactSelect = dynamic(
  () => import("../ReactSelect").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const getSelectedTags = (options: TagOption[], tags: Tag[]) => {
  return tags?.filter((tag) =>
    options.some((option) => option.value == tag.id)
  );
};

type IProps = {
  tags: Tag[];
  onChange: (tags: Tag[]) => void;
  selectedTags?: Tag[];
  clearValue?: boolean;
};
const TagSelect: FC<IProps> = (props) => {
  const selectedTags = props?.selectedTags;
  const tags = props.tags;
  const onChange = props.onChange;
  const clearValue = props.clearValue;
  let tagOptions = serializeTags(tags);

  const selectedTagsOptions = serializeTags(selectedTags);
  return (
    <>
      {ReactSelect && (
        <ReactSelect
          placeholder="التصنيفات"
          noOptionsMessage={"لا توجد تصنيفات"}
          defaultValue={selectedTags ? selectedTagsOptions : []}
          value={selectedTags ? selectedTagsOptions : []}
          isMulti={true}
          isDisabled={!tags}
          onChange={(options: TagOption[]) => {
            const selectedTags = getSelectedTags(options, tags);
            onChange(selectedTags);
          }}
          options={tagOptions}
        />
      )}
    </>
  );
};

export default TagSelect;
