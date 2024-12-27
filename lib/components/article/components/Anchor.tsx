import styles from "../article.module.css";

export const Anchor = ({ name }: AnchorProps) => {
  return <span id={name} className={styles["anchor"]} />;
};

interface AnchorProps {
  name: string;
}
