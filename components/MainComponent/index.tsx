import styles from "./MainComponent.module.css";
const MainComponent = (props) => {
  return <div className={styles.component}>{props.children}</div>;
};

export default MainComponent;
