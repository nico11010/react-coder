import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Error from "./componentes/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./componentes/CartContainer";
import Checkout from "./componentes/Checkout";

import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

const theme = extendTheme({
  colorSchemes: {
    light: {},
    dark: {},
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark" modeStorageKey="joy-mode">
      <CssBaseline />
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer saludo="Bienvenido a Van Houtte Cafe!" />
              }
            />
            <Route path="/category/:type" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
