import { useEffect, useState } from "react";
import Canvasflow from "../lib/Canvasflow";
import Article from "../lib/components/article/Article";
import styles from "./App.module.css";

const ENDPOINT = "https://graphql.canvasflow.io/graphql";
const APP_KEY = "9411a5d8-a9e8-413e-86dc-4664bb67b0c7";
const ARTICLE_ID = "54416";

export const TestArticle = () => {
  const [data, setData] = useState<null | Data>(null);
  useEffect(() => {
    getRequestData()
      .then((r) => {
        setData(r);
        return loadFonts(r.fonts)
      })
      .then(() => {
        console.log(`Load fonts successfully`)
      })
      .catch(console.error);
  }, []);

  if (data === null) {
    return <div>Loading</div>;
  }

  const { article } = data;

  return (
    <div className={styles["test-article"]} style={{fontSize: '62.5%'}}>
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
        "query GetArticle($id:ID!){article(id:$id){id name thumbnail index style slug audio ArticleID isFeatured components}styles{id name description properties supportedDevices type parent tablet desktop created lastModified}fonts {name urls}}",
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
  fonts: Array<Canvasflow.Font>;
}

async function loadFonts(fonts: Array<Canvasflow.Font>): Promise<void> {
  await Promise.all(fonts.map((font) => loadFont(font)));
}

async function loadFont(font: Canvasflow.Font): Promise<void> {
	const { name, urls } = font;
	const promises = [];

	for (const url of urls) {
		if (!/.woff2$/.test(url)) {
			continue;
		}
		// THIS DOWNLOADS THE FONT

		promises.push(
			new Promise<void>((resolve) => {
				const fontFace = new FontFace(name, `url(${url})`);
				fontFace
					.load()
					.then((loadedFace) => {
						document.fonts.add(loadedFace);
						resolve();
					})
					.catch((err) => {
						console.error(err);
						resolve();
					});
			}),
		);
	}

	await Promise.all(promises);
}
