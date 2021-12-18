import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

import "./Home.css";

function Home() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <div className="Home">
      <ThemeProvider theme={theme}>
        <div>
          <Typography variant="h3" component="div" gutterBottom>
            <Box sx={{ textAlign: "center", m: 1 }}>NaviSM</Box>
          </Typography>
          <Stack
            sx={{ width: "90%" }}
            spacing={2}
            style={{ margin: "0 auto", paddingTop: "20px" }}
          >
            <Alert severity="error">
              <AlertTitle>无法访问</AlertTitle>
              网站正在开发中，若您为网站管理员，请从 <strong>
                管理员后台
              </strong>{" "}
              进入。
            </Alert>
          </Stack>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Home;
