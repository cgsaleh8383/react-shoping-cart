import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, IconButton } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: "100%",
  height: "100%",
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid({
  cartItems,
  onAdd,
  removeAdd,
  removeAllProducts,
}) {
  const theme = useTheme();
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const textPrice = itemPrice * 0.14;
  const shipingPrice = itemPrice > 2000 ? 0 : 40;
  const totalPrice = itemPrice + textPrice + shipingPrice;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Item>
          <div> {cartItems.length === 0 && <div>Cart is empty</div>}</div>
          <div sx={{ borderBottom: 1 }}>
            {cartItems.map((item) => {
              return (
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? (
                          <SkipNextIcon onClick={() => onAdd(item)} />
                        ) : (
                          <SkipPreviousIcon onClick={() => removeAdd(item)} />
                        )}
                      </IconButton>
                      <IconButton aria-label="play/pause">
                        {/* <PlayArrowIcon sx={{ height: 38, width: 38 }} /> */}
                        {item.qty} x ${item.price.toFixed()}
                      </IconButton>
                      <IconButton aria-label="next">
                        {theme.direction === "rtl" ? (
                          <SkipPreviousIcon onClick={() => removeAdd(item)} />
                        ) : (
                          <SkipNextIcon onClick={() => onAdd(item)} />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: "120px" }}
                    image={item.image}
                    alt="Live from space album cover"
                  />
                </Card>
              );
            })}
          </div>
          {cartItems.length !== 0 && (
            <div
              style={{
                paddingTop: "30px",
                borderTop: "1px solid black",
                marginTop: "20px",
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p>Item Price</p>
                <p>${itemPrice.toFixed(2)}</p>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p>Tex </p>
                <p>${textPrice.toFixed(2)}</p>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p>Shipping Price</p>
                <p>${shipingPrice.toFixed(2)}</p>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <p>Total Price</p>
                <p>${totalPrice.toFixed(2)}</p>
              </Grid>
              <Button
                variant="contained"
                size="medium"
                onClick={() => removeAllProducts()}
              >
                Check Out Now
              </Button>
            </div>
          )}
        </Item>
      </Grid>
    </Box>
  );
}
