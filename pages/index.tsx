import Link from "next/link";
import { Layout } from "../components/Layout";
import { PokeballAvatar } from "../components/PokeballAvatar";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Fav. Pokemon</h1>
      <Link href="/pokemon">
        <PokeballAvatar />
      </Link>
    </Layout>
  );
}
