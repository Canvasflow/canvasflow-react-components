import styles from "../article.module.css";

export const Caption = (props: CaptionProps) => {
  const { content, style = {} } = props;

  if (!content) {
    return null;
  }

  const classNames = [styles["imagecaption"], "imagecaption"];

  return (
    <figcaption className={classNames.join(" ")} style={style}>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </figcaption>
  );
};

export default Caption;

interface CaptionProps {
  content: string;
  style?: any;
}
