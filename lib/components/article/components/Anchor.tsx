import styles from "../article.module.css";

export const Anchor = ({ name }: AnchorProps) => {
  return <span id={name} className={styles["anchor"]} />;
};

export default Anchor;

interface AnchorProps {
  name: string;
}
