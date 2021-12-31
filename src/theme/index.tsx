import colors from "./colors";
import themePalette from "./themePalette";
import { createTheme, PaletteOptions } from "@mui/material/styles";
const theme = createTheme({
    typography: {
        fontFamily: "Rubik, sans-serif;",
        subtitle1: { fontFamily: "Work Sans, sans-serif" },
        subtitle2: { fontFamily: "Work Sans, sans-serif" },
        body1: {
            fontFamily: "Work Sans, sans-serif",
            letterSpacing: "-0.02em",
        },
        body2: {
            fontFamily: "Work Sans, sans-serif",
            letterSpacing: "-0.02em",
        },
        caption: {
            fontFamily: "Work Sans, sans-serif",
        },
    },
    palette: themePalette as PaletteOptions,
    components: {},
});

export { theme, colors };
