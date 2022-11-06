import { FC, ReactNode } from "react";
import styles from "./TwoColumn.module.css";

type IProps = {
  right: ReactNode;
  left: ReactNode;
  rightTakes?: number;
};
const TwoColumn: FC<IProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.right}
        style={{ flexBasis: `${props.rightTakes}px` }}
      >
        {props.right}
      </div>
      <div
        style={{ flexBasis: `calc( 100% - ${props.rightTakes}px - 25px` }}
        className={styles.left}
      >
        {props.left}
      </div>
    </div>
  );
};
export default TwoColumn;
