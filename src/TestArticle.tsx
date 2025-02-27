import Canvasflow from "../lib/Canvasflow";
import Article from "../lib/components/article/Article";
import styles from "./App.module.css";
export const TestArticle = () => {
  const data = getData();
  const { article } = data;
  if (!article) {
    return <div className={styles["missing-article"]}>Missing article</div>;
  }
  return (
    <div className={styles["test-article"]}>
      <Article {...article} styles={data.styles} isSelected={true} />
    </div>
  );
};

function getData(): Data {
  return {
    article: getArticleData(),
    styles: getStyles(),
  };
}

function getArticleData(): Canvasflow.Article | null {
  return null;
}

function getStyles(): Array<Canvasflow.Style> {
  return [];
}

interface Data {
  article: Canvasflow.Article | null;
  styles: Array<Canvasflow.Style>;
}
