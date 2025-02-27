import { useEffect, useState } from "react";
import Canvasflow from "../lib/Canvasflow";
import Article from "../lib/components/article/Article";
import styles from "./App.module.css";

const ENDPOINT = "https://graphql.canvasflow.io/graphql";
const APP_KEY = "e3f0ccab-1300-45d3-9dc9-45ae9920ba3d";
const ARTICLE_ID = "53884";

export const TestArticle = () => {
  const [data, setData] = useState<null | Data>(null);
  useEffect(() => {
    getRequestData()
      .then((r) => {
        setData(r);
      })
      .catch(console.error);
  }, []);

  if (data === null) {
    return <div>Loading</div>;
  }

  const { article } = data;

  return (
    <div className={styles["test-article"]}>
      <Article {...article} styles={data.styles} isSelected={true} />
    </div>
  );
};

async function getRequestData(): Promise<Data> {
  const options: any = {
    method: "POST",
    headers: { "Content-Type": "application/json", "app-key": APP_KEY },
    body: JSON.stringify({
      query:
        "query GetArticle($id:ID!){article(id:$id){id name thumbnail index style slug audio ArticleID isFeatured components}styles{id name description properties supportedDevices type parent tablet desktop created lastModified}}",
      variables: {
        id: ARTICLE_ID,
      },
    }),
  };

  const response = await fetch(ENDPOINT, options);
  const { data } = await response.json();
  return data;
}

interface Data {
  article: Canvasflow.Article;
  styles: Array<Canvasflow.Style>;
}
