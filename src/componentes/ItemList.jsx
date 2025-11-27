import React from "react";
import Item from "./Item";
import Grid from "@mui/joy/Grid";

const ItemList = ({ data }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
      sx={{ flexGrow: 1 }}
    >
      {data.map((prod) => (
        <Grid key={prod.id} size={{ xs: 4, sm: 4, md: 3 }}>
          <Item prod={prod} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
