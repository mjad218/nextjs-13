"use client";
import Select, { StylesConfig } from "react-select";
import { FC } from "react";

type IOption = {
  value: number | string;
  label: string;
};
type IProps = {
  placeholder?: string;
  noOptionsMessage?: string;
  onChange: (option: IOption | IOption[]) => void;
  options: IOption[];
  value: IOption | IOption[];
  defaultValue: IOption | IOption[];
  isMulti?: boolean;
  isDisabled?: boolean;
};

const ReactSelect: FC<IProps> = (props) => {
  const placeholder = props.placeholder;
  const noOptionsMessage = props.noOptionsMessage;
  const onChange = props.onChange;
  const options = props.options;
  let value = props.value;
  const isMulti = props.isMulti;
  const isDisabled = props.isDisabled;
  const defaultValue = props.defaultValue;
  const noOptionCallback = ({ inputValue }) => {
    return `${noOptionsMessage} ${inputValue}`;
  };

  return (
    <>
      {Select && (
        <Select
          placeholder={placeholder}
          noOptionsMessage={noOptionCallback}
          isRtl={true}
          isMulti={isMulti}
          isDisabled={isDisabled}
          value={value ? value : ""}
          defaultValue={defaultValue ? defaultValue : ""}
          styles={customStyles}
          onChange={onChange}
          options={options}
        />
      )}
    </>
  );
};

export default ReactSelect;

const customStyles: StylesConfig = {
  // container: () => ({}),
  valueContainer: () => ({
    alignItems: "center",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    gap: "5px",
    maxHeight: "100%",
    height: "100%",
    margin: "0",
  }),
  control: () => ({
    alignItems: "center",
    borderColor: "var(--item-border)",
    borderRadius: "5px",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    paddingInline: "15px 10px",
    height: "50px",
  }),
  multiValue: () => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "var(--item-border)",
    paddingInline: "10px 0px",
    borderRadius: "5px",
    overflow: "hidden",
  }),
  input: () => ({
    height: "100%",
  }),
};
