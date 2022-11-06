const RenderDate = (props: RenderDateProps) => {
  const date = props.date;
  const str = new Date(date).toLocaleDateString("ar-EG-u-nu-latn", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return <time dateTime={date}>{` ${str} `}</time>;
};
type RenderDateProps = {
  date: string;
};
export default RenderDate;
