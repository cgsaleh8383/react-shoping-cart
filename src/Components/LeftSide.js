import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
// import { data } from "./data";

export default function MediaCard({ products, onAdd }) {
  return (
    <>
      <Grid container spacing={2}>
        {products.map((product, id) => (
          <Grid item xs={4} key={id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography textAlign="justify" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography textAlign="justify" color="text.primary" pt={1}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => onAdd(product)}>
                  Add to Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
