export interface colorsProps {
  name: string;
  color: string;
}

export interface ColoredCardProps {
  color: string;
  name: string;
  onClick: (color: string) => void;
}
