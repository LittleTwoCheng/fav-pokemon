import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import styles from "./index.module.css";

export default function PokemonDetail() {
  const { query, isReady } = useRouter();
  const name = String(query.name);
  return <Layout>TODO</Layout>;
}
