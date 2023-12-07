import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./screens/Store";
import Layout from "./components/Layout";
import { ScrollToTop } from "react-router-scroll-to-top";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
