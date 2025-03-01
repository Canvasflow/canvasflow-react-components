import styles from "../article.module.css";
import DOMPurify from "dompurify";
import ReactHtmlParser from "html-react-parser";

export const Caption = (props: CaptionProps) => {
  const { content, style = {} } = props;

  if (!content) {
    return null;
  }

  const classNames = [styles["imagecaption"], "imagecaption"];

  const sanitizedData = DOMPurify.sanitize(content);

  return (
    <figcaption className={classNames.join(" ")} style={style}>
      <p>{ReactHtmlParser(sanitizedData)}</p>
    </figcaption>
  );
};

export default Caption;

interface CaptionProps {
  content: string;
  style?: any;
}
