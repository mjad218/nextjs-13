import styles from "./ListTemplates.module.css";
import TemplateItem from "../TemplatItem/TemplateItem";
import Template from "../../types/template.type";
import { HiTemplate } from "react-icons/hi";
import { FC } from "react";
type IProps = {
  templates: Template[];
  title?: string;
};
const ListTemplates: FC<IProps> = (props) => {
  const templates: Template[] = props.templates;
  const title = props.title;
  if (!templates?.length) {
    return null;
  }
  return (
    <div className={templates.length > 0 ? styles.list + " container" : ""}>
      {templates?.length > 0 && (
        <div className={styles.items}>
          {templates?.map((template) => (
            <div key={template.id} className={styles.wrapper}>
              <TemplateItem template={template} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ListTemplates;
