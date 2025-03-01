import styles from "../article.module.css";
import DOMPurify from "dompurify";
import ReactHtmlParser from "html-react-parser";

export const Credit = (props: CreditProps) => {
  const { content, style = {} } = props;

  if (!content) {
    return null;
  }

  const sanitizedData = DOMPurify.sanitize(content);

  return (
    <cite className={["credit", styles["credit"]].join(" ")} style={style}>
      {ReactHtmlParser(sanitizedData)}
    </cite>
  );
};

export default Credit;

interface CreditProps {
  content: string;
  style?: any;
}
