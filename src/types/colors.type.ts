export interface colorsProps {
  color: string;
  name: string;
}

export interface ColoredCardProps {
  onClick: (color: string) => void;
  color: string;
}
