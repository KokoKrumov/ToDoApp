import { ColoredCardProps } from "../../types/colors.type";
import styles from "./ColoredCard.module.css";
import { Card } from "@mui/material";

const coloredCard = ({ color, onClick }: ColoredCardProps) => {
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
