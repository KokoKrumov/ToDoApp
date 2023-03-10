import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { colorsProps } from "../types/colors.type";

const useGetColors = () => {
  const [colors, setColors] = useState<colorsProps[]>();

  const theme = useTheme();
  const palette: {} = theme.palette;
  const extractedColors: colorsProps[] = [];

  useEffect(() => {
    for (const key in palette) {
      const obj: {} = palette[key as keyof {}];
      if (obj.hasOwnProperty("main")) {
        const color: string = obj["main" as keyof {}];
        const colorExist = extractedColors.find((color) => {
          return color.name === key;
        });

        if (!colorExist) {
          extractedColors.push({
            name: key,
            color: color,
          });
        }
      }

      setColors(extractedColors);
    }
  }, []);

  return colors;
};

export default useGetColors;
