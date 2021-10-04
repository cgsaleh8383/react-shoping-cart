import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Header from "./Header";
import { data } from "./data";

export default function Home() {
  const { products } = data;
  const [cartItems, setCartItems] = React.useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const removeAllProducts = () => {
    alert("Thank you for shopping!");
    setCartItems([]);
  };
  return (
    <>
      <Header cartItems={cartItems.length} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mt={5} px={2}>
          <Grid item xs={8}>
            <LeftSide onAdd={onAdd} products={products} />
          </Grid>
          <Grid item xs={4}>
            <RightSide
              onAdd={onAdd}
              cartItems={cartItems}
              removeAdd={removeAdd}
              removeAllProducts={removeAllProducts}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
