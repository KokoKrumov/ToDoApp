export interface colorsProps {
  color: string;
  name: string;
}

export interface ColoredCardProps {
  onClick: (color: string) => void;
  color: string;
}

export interface colorsMapProps {
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
}
