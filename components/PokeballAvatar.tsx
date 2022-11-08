import { Avatar } from "@mui/material";
import Image from "next/image";
import pokeBallPicture from "public/poke-ball.png";

type PokeballAvatarProps = {
  picture?: string | null;
  name?: string;
  radius?: number;
};

export function PokeballAvatar({
  picture,
  name = "Poke Ball",
  radius = 30,
}: PokeballAvatarProps) {
  return (
    <Avatar
      alt={name}
      src={picture || undefined}
      sx={{ width: radius, height: radius }}
    >
      {!!picture ? undefined : (
        <Image
          alt="Poke Ball"
          src={pokeBallPicture}
          width={radius}
          height={radius}
        />
      )}
    </Avatar>
  );
}
