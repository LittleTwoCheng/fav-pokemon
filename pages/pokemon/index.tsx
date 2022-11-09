import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Link from "next/link";
import { useGetPokemonList } from "../../api/useGetPokemonList";
import { Layout } from "../../components/Layout";
import { PokeballAvatar } from "../../components/PokeballAvatar";
import styles from "./index.module.css";

export default function PokemonHome() {
  const { data, isLoading } = useGetPokemonList();
  console.log(data);
  return (
    <Layout>
      <List>
        {data?.results.map((pokemon: any) => (
          <ListItem key={pokemon.name}>
            <ListItemAvatar>
              <PokeballAvatar name={pokemon.name} />
            </ListItemAvatar>
            <Link href={`/pokemon/${pokemon.name}`}>
              <ListItemText primary={pokemon.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
}
