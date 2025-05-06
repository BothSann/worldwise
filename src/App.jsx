import { BrowserRouter, Routes, Route } from "react-router";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

const homePath = "/";
const productPath = "/product";
const pricingPath = "/pricing";
const loginPath = "/login";
const appPath = "/app";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<Homepage />} />
        <Route path={productPath} element={<Product />} />
        <Route path={pricingPath} element={<Pricing />} />
        <Route path={loginPath} element={<Login />} />
        <Route path={appPath} element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
