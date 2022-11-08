import { ReactNode } from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://preface.ai?utm_source=tech-team&utm_campaign=lunch-and-learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`You will be all right ©${new Date().getFullYear()} Prefacer`}
        </a>
      </footer>
    </div>
  );
}
