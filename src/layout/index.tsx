import { Box } from "@mui/material";
import { colors } from "../theme";

const Layout = (props: any) => {
    const { children } = props;
    return (
        <Box
            sx={{
                display: "flex",
                height: "100%",
                backgroundColor: colors.solitude,
            }}
        >
            {children}
        </Box>
    );
};

export default Layout;
