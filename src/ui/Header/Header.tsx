import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { header } = styles;

  return (
    <Typography variant="h2" gutterBottom className={header}>
      {title}
    </Typography>
  );
};

export default Header;
