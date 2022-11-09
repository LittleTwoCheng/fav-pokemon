import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useGetPokemonDetail } from "../api/useGetPokemonDetail";
import { useSubmitFavPokemon } from "../api/useSubmitFavPokemon";

type PokemonCardProps = {
  name: string;
};

export function PokemonCard({ name = "Poke Ball" }: PokemonCardProps) {
  const { data, isLoading } = useGetPokemonDetail(name);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const mutation = useSubmitFavPokemon(() => {
    setIsSubmitted(true);
  });

  if (isLoading) {
    return (
      <Card>
        <Skeleton variant="rectangular" height={475} width={475} />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
        <CardActions>
          <Button size="small" disabled>
            Fav
          </Button>
          <Button size="small" disabled>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="475"
        width="475"
        image={data.sprites.other["official-artwork"].front_default}
        alt={data.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        {data.types.map((type: any, index: number) => (
          <Chip key={`${index}-${type.type}`} label={type.type.name} />
        ))}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            mutation.mutate(data.name);
          }}
          disabled={isSubmitted}
        >
          Fav
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
