import Component from "./Component";
/**
 * This is an object representing a Canvasflow Article.
 */
export interface Article {
  /**
   * Unique identifier for the article
   */
  id: `${number}`;

  /**
   * Identifier for the article in system
   */
  ArticleID: `${number}`;

  /**
   * Represents the article in a human readable format
   * @example
   * - `this-is-an-article`
   * - `another-article`
   */
  slug?: string;

  /**
   * List of features that are required by the user to read the article
   */
  features?: Array<string>;

  /**
   * Order of the article
   */
  index?: number;

  /**
   * Style used by the article
   */
  style: `${number}`;

  /**
   * Stores the name of the article
   */
  name?: { [key: string]: string } | string;

  /**
   * List of {@link Component.Type} that compose the article
   */
  components: Array<Component.Type>;

  /**
   * Stores pages that are used for replica version
   */
  pages?: Array<string>;
}

export default Article;
