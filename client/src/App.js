import React from "react";
import { Stack, ThemeProvider } from "react-bootstrap";
import Header from "./components/Header/Header";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import MainHook from "./components/MainHook";
import RightPanel from "./components/RightPanel/RightPanel";

const App = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Header />
      <Stack direction="horizontal" gap={3}>
        <div className="ms-auto">
          <LeftPanel />
        </div>
        <div className="ms-auto">
          <MainHook />
        </div>
        <div className="ms-auto">
          <RightPanel />
        </div>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
