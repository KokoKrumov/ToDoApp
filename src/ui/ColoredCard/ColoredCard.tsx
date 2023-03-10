import { Card } from "@mui/material";
import { ColoredCardProps } from "../../types/colors.type";
import styles from "./ColoredCard.module.css";

const coloredCard = ({ color, name, onClick }: ColoredCardProps) => {
  const { coloredCard } = styles;

  return (
    <Card
      className={coloredCard}
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    />
  );
};

export default coloredCard;
