import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import MiniDrawer from "./components/MiniDrawer";

function App() {
  return (
    <Stack>
      <MiniDrawer />
      <Outlet />
    </Stack>
  );
}

export default App;
