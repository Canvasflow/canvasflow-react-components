import "./App.css";

// import {Example} from '../lib/components/Example'
import styles from "./App.module.css";
import { TestArticle } from "./TestArticle";

function App() {
  return (
    <div className={styles["app"]}>
      <TestArticle />
    </div>
  );
}

export default App;
