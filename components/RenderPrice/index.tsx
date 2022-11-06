import styles from "./RenderPrice.module.css";
const RenderPrice = (props) => {
  const { color, fontSize } = props;
  return (
    <span
      className={styles.price}
      style={{
        fontSize: `${fontSize}`,
        color: `${color}`,
      }}
    >
      <link itemProp="availability" href="https://schema.org/InStock" />
      <meta itemProp="priceCurrency" content="USD" />
      <span itemProp="price">{props.children}</span>$
    </span>
  );
};

export default RenderPrice;
