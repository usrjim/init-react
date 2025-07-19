import {createRoot} from "react-dom/client";

import {Container} from "./components/container";

function App() {
  return <Container />;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
