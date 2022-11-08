import { useGetPokemonList } from "../../api/useGetPokemonList";
import { Layout } from "../../components/Layout";
import styles from "./index.module.css";

export default function PokemonHome() {
  const { data, isLoading } = useGetPokemonList();
  console.log(data);
  return <Layout></Layout>;
}
