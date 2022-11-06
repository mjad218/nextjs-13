import Image from "next/image";
import styles from "./TemplateItem.module.css";
import Link from "next/link";
import Rating from "../Rating/Rating";
import Template from "../../types/template.type";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { FC } from "react";
import RenderDate from "../RenderDate";
import { AiOutlineArrowLeft } from "react-icons/ai";

type IProps = {
  template: Template;
};
const TemplateItem: FC<IProps> = (props) => {
  const template: Template = props.template;
  return (
    <article className={styles.item}>
      <span className={styles.bookmark}>
        <BsBookmark />
        <BsFillBookmarkFill />
      </span>
      <Image height={150} width={200} src={""} alt={template.title} />
      <div className={styles.details}>
        {template.tags?.length > 0 && (
          <span className={styles.tag}>
            <Link
              href={
                "/" +
                template?.category?.slug +
                "/tags/" +
                template?.tags[0]?.slug
              }
            >
              {template?.tags[0]?.title}
            </Link>
          </span>
        )}

        <h3>
          <Link href={"/" + template?.category?.slug + "/" + template?.slug}>
            {template?.title}
          </Link>
        </h3>
        <p>
          <span>
            السعر
            <span className={styles.price}> {template.price} </span>
          </span>
          <span>
            المنصة <strong>{template?.category?.title}</strong>
          </span>
          <span>
            التقييم
            <Rating stars={template?.stars} />
          </span>
        </p>
        <div className={styles.meta}>
          <div>
            <h4>
              تطوير
              <strong>
                {template?.developer?.firstName +
                  " " +
                  template?.developer?.lastName}
              </strong>
            </h4>
            <div>
              <RenderDate date={template?.createdAt} />

              <span className={styles.downloads}>
                عدد التحميلات {template?.purchases}
              </span>
            </div>
          </div>
        </div>
        <Link
          className={styles.cta}
          href={"/" + template.category?.slug + "/" + template?.slug}
        >
          <AiOutlineArrowLeft />
          عرض
        </Link>
      </div>
    </article>
  );
};
export default TemplateItem;
