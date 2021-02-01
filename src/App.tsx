import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { Menu, Board } from "./features";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" disableGutters>
        <Menu />
        <Board />
      </Container>
    </>
  );
}

export default App;
